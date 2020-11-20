import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user/user.model';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

  addUser(user: User) {
    return this.http.post<User>("https://localhost:5001/api/user", user);
  }
}
