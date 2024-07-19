import { Component, inject } from '@angular/core';
import { BooksService } from '../../../shared/services/books.service';
import { Book } from '../../../shared/interfaces/book.interface';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { Review } from '../../../shared/interfaces/review.interface';
import { ReviewsService } from '../../../shared/services/reviews.service';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-details-book',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    DatePipe],
  templateUrl: './details-book.component.html',
  styleUrl: './details-book.component.scss'
})
export class DetailsBookComponent {
  book!: Book;
  reviews: Review[] = [];
  idRoute!: string;

  bookServices = inject(BooksService);
  activatedRoute = inject(ActivatedRoute);
  reviewService = inject(ReviewsService);

  ngOnInit(): void {
    this.detailsBook();
  }

  getBookById(idBook: string) {
    this.bookServices.getBookById(idBook).subscribe((book: Book) => {
      this.book = book;
    });
  }

  getReviewByBookId(idBook: number) {
    this.reviewService.getReviewByBookId(Number(idBook)).subscribe((data) => {
      this.reviews = data;
    });
  }

  getIdByRoute() {
    this.idRoute = this.activatedRoute.snapshot.url[1].path;
  }

  detailsBook() {
    this.getIdByRoute();
    this.getBookById(this.idRoute);
    this.getReviewByBookId(Number(this.idRoute));
  }
}
