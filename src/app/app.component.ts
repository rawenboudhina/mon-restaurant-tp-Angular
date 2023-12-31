import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon_RESTAU';
  constructor (public authService: AuthService,
                private Router:Router) {}
  ngOnInit () {
    let isloggedin : string | null;
    let loggedUser:string | null;

    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    if (isloggedin!="true" || !loggedUser)
    this.Router.navigate(['/login']);
    else
    this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
  onLogout(){
    this.authService.logout();
  }
}
