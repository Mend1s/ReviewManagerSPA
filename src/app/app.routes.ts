import { Routes } from '@angular/router';
import { BookComponent } from '../pages/book/book.component';
import { HomeComponent } from '../pages/home/home.component';
import { DialogBookComponent } from '../pages/book/dialog-book/dialog-book.component';

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
  },
  {
    path: 'new-book',
    loadComponent: () => import('../pages/book/dialog-book/dialog-book.component').then((m) => m.DialogBookComponent)
  }
];
