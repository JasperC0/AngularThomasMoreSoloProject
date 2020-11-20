import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AddJournalistService {

  constructor(private http: HttpClient) { }

  addJournalist(user: User) {
    return this.http.post<User>("https://localhost:5001/api/user/journalist", user);
  }
}
