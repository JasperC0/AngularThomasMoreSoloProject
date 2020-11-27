import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/articles/article.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getLast5Articles(): Observable<Article[]> {
    return this.http.get<Article[]>("https://localhost:5001/api/Article/Last/5");
  }
}
