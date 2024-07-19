import { Component, inject } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { Book } from '../../shared/interfaces/book.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './card/card.component';
import { RouterLink } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { ProgressService } from '../../shared/services/progress.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CardComponent,
    RouterLink,
    CreateBookComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  books: Book[] = [];
  booksService = inject(BooksService);
  progressService = inject(ProgressService);
  showError: boolean = false;

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
    this.progressService.show();
    this.booksService.getAll().pipe(catchError(error => {
      this.showError = true;
      return of([]);
    })
    ).subscribe((books) => {
      this.books = books;
      this.progressService.hide();
    });
  }
}
