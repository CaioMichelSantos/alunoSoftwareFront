import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { EventEmitterService } from "../../services/eventemiter.service";
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';


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
    public form: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;

    // loginEmailForm: FormGroup;
    // loginPasswordForm: FormGroup;

    constructor(
        fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private eventEmitterService: EventEmitterService,
        // private formBuilder: FormBuilder,
    ) {
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }

    ngOnInit() {


    }

    public onSubmit(values: Object): void {
        if (this.form.invalid) {
            return
        }
        localStorage.setItem('currentUser', 'teste');
        // this.toastr.success('Sucesso', 'Login realizado com sucesso');
        console.log('Entrou')
        this.router.navigate(['/notification']);

        //So terminar
        // this.authenticationService.login(this.user.email, this.user.password)
        //   .subscribe(
        //     data => {
        //       this.toastr.success('Sucesso', 'Login realizado com sucesso');
        //       this.router.navigate(['/pages/dashboard']);
        //     },
        //     error => {
        //       this.toastr.error('Error', 'Falha ao realizar Login');
        //       console.log(error)
        //     });

    }



}

