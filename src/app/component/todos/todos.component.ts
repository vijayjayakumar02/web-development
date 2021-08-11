import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos!: Todo[];

  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false,
      },
      {
        content: 'Second Todo',
        completed: false,
      },
      {
        content: 'Third Todo',
        completed: false,
      },
    ];
  }
  Done(id: number) {
    this.todos.map((value, index) => {
      if (index == id) value.completed = !value.completed;
      return value;
    });
  }
  Delete(id: number) {
    this.todos = this.todos.filter((value, index) => index !== id);
  }
  Add() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
}
