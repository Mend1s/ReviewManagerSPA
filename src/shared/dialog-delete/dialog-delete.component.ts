import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BooksService } from '../services/books.service';
import { Router } from '@angular/router';
import { Book } from '../interfaces/book.interface';

@Component({
  selector: 'app-dialog-delete',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule],
  templateUrl: './dialog-delete.component.html',
  styleUrl: './dialog-delete.component.scss'
})
export class DialogDeleteComponent {

  router = inject(Router);
  book: Book[] = [];

  private _bookService = inject(BooksService);
  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string },
  private dialogRef: MatDialogRef<DialogDeleteComponent>) {}

  onNo() {
    this.dialogRef.close(false);
  }

  onYes(){
    this.dialogRef.close(true);
  }

  deleteBook(): void {
    this._bookService.deleteBook(Number(this.data.id)).subscribe(data => {});
    this.dialogRef.close(true);
    // this.router.navigate(['/home']);
  }
}
