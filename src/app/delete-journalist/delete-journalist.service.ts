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

  deleteUser(userID: number) {
    return this.http.delete<User>("https://localhost:5001/api/User/" + userID);
  }
}
