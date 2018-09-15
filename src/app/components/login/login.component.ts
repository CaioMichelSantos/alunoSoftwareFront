import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { ToastrService } from 'ngx-toastr';
import { EventEmitterService } from '../../services/eventemiter.service';
import { AuthenticationService } from '../../services/authentication.service';

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
    submitted: Boolean = false;
    user = {
        email: null,
        password: null
    };
    public form: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;

    constructor(
        fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private storageService: StorageService,
        private authenticationService: AuthenticationService,
        private toastr: ToastrService
    ) {
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(3)])]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }

    ngOnInit() { }

    public async onSubmit(values: Object) {
        try {
            if (this.form.invalid) {
                this.toastr.error('Verifique os campos e tente novamente', 'Ooops');
                return
            };
            if (this.submitted) { return; }

            this.submitted = true;

            const data: any = await this.authenticationService.login(this.user);
            this.storageService.set('token', data.token);
            this.storageService.set('user', data.user);
            this.toastr.success('Login realizado com sucesso', 'Sucesso');
            EventEmitterService.get('user-logged').emit('');
            this.router.navigate(['/notification']);
        } catch (err) {
            this.toastr.error('Ooops', 'Não foi possível realizar o login');
        } finally {
            this.submitted = false;
        }
    }
}

