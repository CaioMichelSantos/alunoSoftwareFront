import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

import { EventEmitterService } from "../../services/eventemiter.service";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  islogin: boolean;
  idUrl: string;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute
  ) {
    EventEmitterService.get('textChange').subscribe(data => this.islogin = data);

  }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.islogin = true;
    }
  }

  loginRedirect() {
    this.authenticationService.logout()
    this.islogin = false;
    this.router.navigate(['/login' + this.router.url]);
      
    
  }

  notification() {
    this.router.navigate(['/notification']);
  }
  chat() {
    this.router.navigate(['/chat']);
  }
}