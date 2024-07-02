import { Component, inject } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { Book } from '../../shared/interfaces/book.interface';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  books: Book[] = [];
  booksService = inject(BooksService);

  ngOnInit() {
    this.booksService.getAll().subscribe((books) => {
      this.books = books;
    });
  }

}
