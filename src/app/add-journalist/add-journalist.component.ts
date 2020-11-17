import { Component, OnInit } from '@angular/core';
import {RegisterService} from 'src/app/register/register.service'
import { User } from '../models/user/user.model';

@Component({
  selector: 'app-add-journalist',
  templateUrl: './add-journalist.component.html',
  styleUrls: ['./add-journalist.component.scss']
})
export class AddJournalistComponent implements OnInit {
  user: User = new User(0,"","","","","",2 , "");

  constructor(private _registerService: RegisterService) { }

  submitted: boolean = false;

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    //console.log(this.user)
    this._registerService.addUser(this.user).subscribe(result => {console.log(result)})
  }
}
