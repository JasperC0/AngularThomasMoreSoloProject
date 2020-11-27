import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user.model';
import {RegisterService} from 'src/app/register/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User(0,"","","","","",1, "");

  constructor(private _registerService: RegisterService) { }

  submitted: boolean = false;

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    const checkEmail = this.checkEmail(this.user.email)

    if(checkEmail)
    {
      this._registerService.addUser(this.user).subscribe()
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
