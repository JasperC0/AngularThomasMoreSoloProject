import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/articles/article.model';
import { Tag } from '../models/tag/tag.model';

@Injectable({
  providedIn: 'root'
})
export class EditArticleService {

  constructor(private http: HttpClient) { }

  getTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>("https://localhost:5001/api/tag");
  }

  addArticle(article: Article) {
    return this.http.post<Article>("https://localhost:5001/api/article", article);
  }

  getArticlesFromUser(userID : number): Observable<Article[]> {
    return this.http.get<Article[]>("https://localhost:5001/api/article/User/" + userID);
  }

  updateArticle(article: Article, articleID: number) {
    return this.http.put<Article>("https://localhost:5001/api/article/" + articleID, article);
  }
}
