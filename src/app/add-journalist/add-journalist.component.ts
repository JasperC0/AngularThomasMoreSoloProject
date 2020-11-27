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
    const checkEmail = this.checkEmail(this.user.email)

    if(checkEmail)
    {
      this._addJournalistService.addJournalist(this.user).subscribe(() => {
        this.submitted = true;    
      })

    }
    else{
      alert("Please enter valid email!")
    }
  }

  checkEmail(email: string): boolean
  {
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regexp.test(this.user.email);
  }
}
