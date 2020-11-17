import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/articles/article.model';
import { Tag } from 'src/app/models/tag/tag.model';

@Injectable()
export class ArticlesService {

  constructor(private http: HttpClient) { }

  //gets all articles
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("https://localhost:5001/api/article");
  }

  //gets all tags for filtering
  getTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>("https://localhost:5001/api/tag");
  }
}
