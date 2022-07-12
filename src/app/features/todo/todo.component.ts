import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { TodoServiceService } from 'src/app/service/todo-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoServiceService) { }

  items: MenuItem[] = [];

  context: string = '123';

  todoItems: any[] = []

  ngOnInit() {
      this.items = [
          {label: 'Todo', icon: 'pi pi-fw pi-bookmark', id: "todo"},
          {label: 'Done', icon: 'pi pi-check-circle', id: "done"},
      ]

      this.getItemData("todo");
  }

  activeMenu(event: any) {
    this.getItemData(event.activeItem.id)
  }

  async getItemData(itemId: string) {
    this.context = itemId
    const items = await this.todoService.getAllTodoItems(itemId)
    this.todoItems = items
  }
}
