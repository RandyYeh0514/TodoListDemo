import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { TodoItem } from '../types/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) { }

  async getAllTodoItems(status: string) {
    if (status == 'todo') {
      const result = await lastValueFrom(this.http.get<TodoItem>('./assets/dummy/getTodo.json'))

      return result.items
    }

    if (status == 'done') {
      const result = await lastValueFrom(this.http.get<TodoItem>('./assets/dummy/getDone.json'))

      return result.items
    }

    return []
  }
}
