import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/articles/article.model';
import { Tag } from 'src/app/models/tag/tag.model';
import { Comment } from 'src/app/models/comment/comment.model';
import { Like } from 'src/app/models/like/like.model';

@Injectable()
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("https://localhost:5001/api/article");
  }

  getTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>("https://localhost:5001/api/tag");
  }

  getCommentsFromArticle(articleID: number): Observable<Comment[]>
  {
    return this.http.get<Comment[]>("https://localhost:5001/api/comment/article/" + articleID);
  }

  addComment(comment: Comment)
  {
    return this.http.post<Comment>("https://localhost:5001/api/comment", comment);
  }

  getLikesFromArticle(articleID: number): Observable<Like[]>
  {
    return this.http.get<Like[]>("https://localhost:5001/api/like/article/" + articleID);
  }

  addLike(like: Like)
  {
    return this.http.post<Like>("https://localhost:5001/api/like", like);
  }

  updateLike(like: Like) {
    return this.http.put<Like>("https://localhost:5001/api/like/" + like.likeID, like);
  }
}
