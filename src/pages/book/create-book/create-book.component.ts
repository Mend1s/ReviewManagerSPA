import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { Book } from '../../../shared/interfaces/book.interface';
import { BooksService } from '../../../shared/services/books.service';


@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.scss'
})
export class CreateBookComponent {
  bookForm!: FormGroup;
  checkedBook!: boolean;
  selectedFile!: File;

  private fb = inject(FormBuilder);
  private bookService = inject(BooksService);


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.newFormBook();
  }

  newFormBook() {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      isbn: ['', [Validators.required, Validators.pattern(/^(97(8|9))?\d{9}(\d|X)$/)]],
      author: ['', [Validators.required, Validators.minLength(3)]],
      publisher: ['', [Validators.required, Validators.minLength(3)]],
      genre: ['', Validators.required],
      yearOfPublication: ['', [Validators.required, Validators.min(1000), Validators.max(new Date().getFullYear())]],
      numberOfPages: ['', [Validators.required, Validators.min(1)]],
      imageUrl: [null, Validators.required],
      // averageGrade: [{ value: 0, disabled: true }, [Validators.required, Validators.min(0), Validators.max(5)]]
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.bookForm.patchValue({
      imageUrl: this.selectedFile
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.bookForm.get('title')?.value);
    formData.append('description', this.bookForm.get('description')?.value);
    formData.append('isbn', this.bookForm.get('isbn')?.value);
    formData.append('author', this.bookForm.get('author')?.value);
    formData.append('publisher', this.bookForm.get('publisher')?.value);
    formData.append('genre', this.bookForm.get('genre')?.value);
    formData.append('yearOfPublication', this.bookForm.get('yearOfPublication')?.value);
    formData.append('numberOfPages', this.bookForm.get('numberOfPages')?.value);
    formData.append('imageUrl', this.selectedFile);

    if (!this.checkedBook) {
      this.createdBook(formData);
    } else {
      this.updateBook(formData);
    }
  }

  createdBook(formData: FormData) {
    this.bookService.postBook(formData).subscribe(response => {
      this.router.navigate(['/book']);
    })
  }

  updateBook(formData: FormData) {
    // this.bookService.putBook(formData).subscribe(response => {
    //   this.router.navigate(['/book']);
    // })
  }

  goToBook() {
    this.router.navigate(['/book']);
  }
}
