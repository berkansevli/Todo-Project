import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todo: string = '';
  todos: Todo[] = [];
  filterText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(): void {
    if (this.todo !== '') {
      this.todos.push({
        title: this.todo,
        isDone: false
      });

      this.todo = '';
    }
  }

  removeTodo(todoIndex: number): void {
    this.todos.splice(todoIndex, 1);
  }

  removeAllTodos(): void {
    this.todos = [];
  }

}
