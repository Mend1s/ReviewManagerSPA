import { Component, computed, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Book } from '../../../shared/interfaces/book.interface';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../../../shared/dialog-delete/dialog-delete.component';
import { BooksService } from '../../../shared/services/books.service';
import { filter } from 'rxjs';
import { DialogReviewComponent } from '../../../shared/dialog-review/dialog-review.component';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  books: Book[] = [];

  book = input.required<Book>()
  router = inject(Router);
  dialog = inject(MatDialog);
  _bookService = inject(BooksService);

  idBook = computed(() => this.book().id);
  bookTitle = computed(() => this.book().title);
  bookImageUrl = computed(() => this.book().imageUrl);
  bookDescription = computed(() => this.book().description);

  editBook(element: Book): void {
    this.router.navigate(['/edit-book', element.id]);
  }

  openDialogDelete(enterAnimationDuration: string, exitAnimationDuration: string, id?: number): void {
    this.dialog.open(DialogDeleteComponent, {
      width: '250px',
      data: { id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    })
      .afterClosed()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
        this._bookService.deleteBook(Number(this.idBook())).subscribe(() => {
          this._bookService.getAll().subscribe((books) => {
            this.books = books;
          });
        });
      });
  }

  openDialogReview(enterAnimationDuration: string, exitAnimationDuration: string, id?: number): void {
    this.dialog.open(DialogReviewComponent, {
      width: '600px',
      data: { id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    })
      .afterClosed()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
      });
  }
}
