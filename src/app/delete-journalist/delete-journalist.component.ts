import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/articles/article.model';
import { User } from '../models/user/user.model';
import { DeleteJournalistService } from './delete-journalist.service';

@Component({
  selector: 'app-delete-journalist',
  templateUrl: './delete-journalist.component.html',
  styleUrls: ['./delete-journalist.component.scss']
})
export class DeleteJournalistComponent implements OnInit {

  articles: Article[]
  journalists: Observable<User[]>;
  constructor(private _deleteJournalistService: DeleteJournalistService) {
    this.journalists = this._deleteJournalistService.getUsersFromRole(2)
  }

  ngOnInit(): void {
  }

  delete(userID) { 
    this._deleteJournalistService.deleteUser(userID).subscribe(d =>{
      this.resetWindow()
    })
  }

  resetWindow() {
    window.location.reload();
  }
}
