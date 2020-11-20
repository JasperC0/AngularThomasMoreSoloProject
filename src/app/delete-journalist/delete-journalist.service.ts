import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/articles/article.model';
import { User } from '../models/user/user.model';
import { Comment } from '../models/comment/comment.model';
import { Like } from '../models/like/like.model';

@Injectable({
  providedIn: 'root'
})
export class DeleteJournalistService {


  constructor(private http: HttpClient) { }

  getUsersFromRole(roleID: number): Observable<User[]> {
    return this.http.get<User[]>("https://localhost:5001/api/user/role/" + roleID);
  }

  getArticlesFromUser(userID: number): Observable<Article[]> {
    return this.http.get<Article[]>("https://localhost:5001/api/article/User/" + userID);
  }

  deleteArticle(articleID: number) {
    return this.http.delete<Article>("https://localhost:5001/api/Article/" + articleID);
  }

  deleteUser(userID: number) {
    return this.http.delete<User>("https://localhost:5001/api/User/" + userID);
  }

  deleteComment(commentID: number) {
    return this.http.delete<Comment>("https://localhost:5001/api/Comment/" + commentID);
  }

  deleteLike(likeID: number) {
    return this.http.delete<Like>("https://localhost:5001/api/like/" + likeID);
  }

  getLikesFromUser(userID: number) {
    return this.http.get<Like[]>("https://localhost:5001/api/likes/user/" + userID);

  }

  getLikesFromArticle(articleID: number) {
    return this.http.get<Like[]>("https://localhost:5001/api/likes/article/" + articleID);

  }

  getCommentsFromUser(userID: number) {
    return this.http.get<Comment[]>("https://localhost:5001/api/comment/user/" + userID);

  }

  getCommentsFromArticle(articleID: number) {
    return this.http.get<Comment[]>("https://localhost:5001/api/comment/article/" + articleID);

  }

}
