import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/models/tag/tag.model';


@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) { }

  getTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>("https://localhost:5001/api/tag",{
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
      });
  }

  deleteTag(tagID: number){
    return this.http.delete<Tag>("https://localhost:5001/api/Tag/" + tagID);
  }

  addTag(tag: Tag) {
    return this.http.post<Tag>("https://localhost:5001/api/Tag", tag);
  }

  updateTag(tag: Tag, tagID: number) {
    return this.http.put<Tag>("https://localhost:5001/api/Tag/" + tagID, tag);
  }
}
