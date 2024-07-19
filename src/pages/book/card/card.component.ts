import { Component, computed, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Book } from '../../../shared/interfaces/book.interface';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  book = input.required<Book>()
  router = inject(Router);

  idBook = computed(() => this.book().id);
  bookTitle = computed(() => this.book().title);
  bookImageUrl = computed(() => this.book().imageUrl);
  bookDescription = computed(() => this.book().description);

  editBook(element: Book): void {
    this.router.navigate(['/edit-book', element.id]);
  }
}
