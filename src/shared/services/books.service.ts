import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseUrl = 'https://localhost:7041/api'

  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Book[]>(`${this.baseUrl}/Books`);
  }
}
