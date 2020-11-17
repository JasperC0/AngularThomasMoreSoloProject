import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/user-login/user-login.model';
import { AuthenticateService } from '../Security/authenticate.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  userLogin: UserLogin = new UserLogin('', '');

  constructor(private _authenticateService: AuthenticateService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this._authenticateService.authenticate(this.userLogin).subscribe(result => {
      localStorage.setItem("token", result.token);
      localStorage.setItem("role", result.roleID.toString()) 
      localStorage.setItem("user", result.userID.toString())
    }, error=> {alert("Username or password is incorrect")});
  }
}
