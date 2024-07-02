import { Component, inject } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { Book } from '../../shared/interfaces/book.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CardComponent, RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  books: Book[] = [];
  booksService = inject(BooksService);

  ngOnInit() {
    this.getAllBooks();
    // this.getPhotoById(1);
  }


  getPhotoById(id: number) {
    this.booksService.getPhotoById(id).subscribe((photo) => {
      const reader = new FileReader();
      reader.readAsDataURL(photo);
      reader.onload = () => {
        console.log(reader.result);
        this.books[0].imageUrl = reader.result?.toString();
      };
    });
  }

  getAllBooks() {
    this.booksService.getAll().subscribe((books) => {
      this.books = books;
    });
  }
}
