import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.scss'
})
export class CreateBookComponent {
  bookForm!: FormGroup;
  private fb = inject(FormBuilder);

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
      createDate: [{ value: '', disabled: true }, Validators.required],
      // imageUrl: ['', Validators.required],
      // averageGrade: [{ value: 0, disabled: true }, [Validators.required, Validators.min(0), Validators.max(5)]]
    });
  }

  onSubmit() {
    console.log(this.bookForm.value);
  }

}
