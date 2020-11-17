import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/articles/article.model';

@Injectable({
  providedIn: 'root'
})
export class PublishArticleService {

  constructor(private http: HttpClient) { }

  getArticlesFromStatus(statusID : number): Observable<Article[]> {
    return this.http.get<Article[]>("https://localhost:5001/api/article/Status/" + statusID);
  }

  updateArticle(article: Article, articleID: number) {
    return this.http.put<Article>("https://localhost:5001/api/article/" + articleID, article);
  }
}