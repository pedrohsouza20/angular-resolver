import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from 'src/app/pages/posts/posts.component';
import { TodosComponent } from 'src/app/pages/todos/todos.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos',
  },
  {
    path: 'todos',
    pathMatch: 'full',
    component: TodosComponent,
  },
  {
    path: 'posts',
    pathMatch: 'full',
    component: PostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
