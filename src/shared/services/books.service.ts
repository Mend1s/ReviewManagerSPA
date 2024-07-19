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

  getPhotoById(id: number) {
    return this.httpClient.get(`${this.baseUrl}/Books/download/${id}`, { responseType: 'blob' });
  }

  getBookById(id: string) {
    return this.httpClient.get<Book>(`${this.baseUrl}/Books/${id}`);
  }

  postBook(formData: FormData) {
    return this.httpClient.post(`${this.baseUrl}/Books`, formData);
  }

  putBook(formData: FormData) {
    // return this.httpClient.put(`${this.baseUrl}/Books/${book.id}`, book);
  }
}
