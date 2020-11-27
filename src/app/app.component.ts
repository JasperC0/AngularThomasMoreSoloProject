import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KrantApp';
  role = parseInt(localStorage.getItem("role"))

  constructor(private router: Router) { }

  logout()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("role") 
    localStorage.removeItem("user")
    this.role = parseInt(localStorage.getItem("role"))
    this.router.navigate(['login']);
    
  }
}