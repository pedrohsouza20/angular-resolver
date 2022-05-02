import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/pages/todos/todos.resolver';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  todos: Todo[] = this.activatedRoute.snapshot.data['todos'];

  ngOnInit(): void {}
}
