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
    if(this.router.url.slice(6, 11) == 'login'){
      return
    }
    this.authenticationService.logout()
    this.islogin = false;
    if (this.router.url.slice(1, 5) != 'scls') {
      this.router.navigate(['scls/login' + this.router.url]);
      return
    }
    this.router.navigate(['scls/login/' + this.router.url.slice(6, this.router.url.length)]);
  }

  notification() {
    this.router.navigate(['/scls/mytransactions']);
  }
}
