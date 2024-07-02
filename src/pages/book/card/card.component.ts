import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Book } from '../../../shared/interfaces/book.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  book = input.required<Book>()

  bookDescription = computed(() => this.book().description);

}
