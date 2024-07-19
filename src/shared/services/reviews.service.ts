import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Review } from '../interfaces/review.interface';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  private baseUrl = 'https://localhost:7041/api'

  httpClient = inject(HttpClient);

  getReviewByBookId(id: number) {
    return this.httpClient.get<Review[]>(`${this.baseUrl}/Reviews/book-reviews-id/?idBook=${id}`);
  }
}
