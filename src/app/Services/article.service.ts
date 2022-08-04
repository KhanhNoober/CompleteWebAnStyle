import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) { }

  getA(page: number, perPage: number): any {
    return this.http.get(`https://social.runwayclub.dev/api/articles/latest?page=${page}&per_page=${perPage}`)
  }
}
