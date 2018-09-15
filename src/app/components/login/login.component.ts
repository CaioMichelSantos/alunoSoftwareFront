import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

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
        private loginService: LoginService,
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
                this.toastr.error('Ooops', 'Verifique os campos e tente novamente');
                return
            };
            if (this.submitted) { return; }

            this.submitted = true;

            const data: any = await this.loginService.login(this.user);
            this.storageService.set('token', data.token);
            this.storageService.set('user', data.user);
            this.toastr.success('Sucesso', 'Login realizado com sucesso');
            this.router.navigate(['/notification']);
        } catch (err) {
            this.toastr.error('Ooops', 'Não foi possível realizar o login');
        } finally {
            this.submitted = false;
        }
    }
}
