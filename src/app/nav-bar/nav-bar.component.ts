import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isNavbarCollapsed=true;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loggedIn() {
    return this.auth.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.auth.currentUser = null;
    this.auth.decodedToken = null;
    this.router.navigate(['/']);
  }  

}
