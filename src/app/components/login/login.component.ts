import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { EventEmitterService } from "../../services/eventemiter.service";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
  .loginContainer{
      margin-bottom: 90px;
  }
  `]
})

export class LoginComponent implements OnInit {
 

    //Variavel para login antigo
    user = {
        email: null,
        password: null
    };
   
    // loginEmailForm: FormGroup;
    // loginPasswordForm: FormGroup;
   
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private eventEmitterService: EventEmitterService,
        // private formBuilder: FormBuilder,
    ) { }

    ngOnInit() {
        // this.authenticationService.logout();
        
        // this.loginEmailForm = this.formBuilder.group({
        //     email: ['', Validators.required],
        // }
        // );
        // this.loginPasswordForm = this.formBuilder.group({
        //     password: ['', Validators.required],
        // }
        // );
    }

    

}

