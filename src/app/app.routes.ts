import { Routes } from '@angular/router';
import { BookComponent } from '../pages/book/book.component';
import { HomeComponent } from '../pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
