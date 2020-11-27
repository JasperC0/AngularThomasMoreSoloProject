import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/user-login/user-login.model';
import { AuthenticateService } from '../Security/authenticate.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin('', '');

  constructor(private _authenticateService: AuthenticateService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this._authenticateService.authenticate(this.userLogin).subscribe(result => {
      //set storage for menu and API security
      localStorage.setItem("token", result.token);
      localStorage.setItem("role", result.roleID.toString()) 
      localStorage.setItem("user", result.userID.toString())
      //reload page so menu adapts
      window.location.reload()
    }, error=> {alert("Username or password is incorrect")});

  }
}
