import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private baseUrl = 'https://localhost:7041/api'

  httpClient = inject(HttpClient);

  generateBookAi(){
    return this.httpClient.get<Book>(`${this.baseUrl}/Reports/generate-book`);
  }

}
