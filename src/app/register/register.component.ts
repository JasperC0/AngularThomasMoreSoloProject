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
    //console.log(this.user)
    this._registerService.addUser(this.user).subscribe(result => {console.log(result)})
  }
}
