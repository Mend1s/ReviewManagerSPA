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
  },
  {
    path: 'new-book',
    loadComponent: () => import('../pages/book/create-book/create-book.component').then((m) => m.CreateBookComponent)
  },
  {
    path: 'detail-book/:id',
    loadComponent: () => import('../pages/book/details-book/details-book.component').then((m) => m.DetailsBookComponent)
  }
];
