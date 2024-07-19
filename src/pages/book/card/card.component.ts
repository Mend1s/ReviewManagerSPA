import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Book } from '../../../shared/interfaces/book.interface';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  book = input.required<Book>()

  idBook = computed(() => this.book().id);
  bookTitle = computed(() => this.book().title);
  bookImageUrl = computed(() => this.book().imageUrl);
  bookDescription = computed(() => this.book().description);

}
