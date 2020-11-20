import { Component, OnInit } from '@angular/core';
import {RegisterService} from 'src/app/register/register.service'
import { User } from '../models/user/user.model';
import { AddJournalistService } from './add-journalist.service';

@Component({
  selector: 'app-add-journalist',
  templateUrl: './add-journalist.component.html',
  styleUrls: ['./add-journalist.component.scss']
})
export class AddJournalistComponent implements OnInit {
  user: User = new User(0,"","","","","",2 , "");

  constructor(private _addJournalistService: AddJournalistService) { }

  submitted: boolean = false;

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this._addJournalistService.addJournalist(this.user).subscribe(result => {console.log(result)})
  }
}
