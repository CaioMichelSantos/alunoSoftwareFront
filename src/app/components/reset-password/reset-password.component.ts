import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  user: any = {};
  showResetOptions: Boolean = false;

  constructor(
    private toastr: ToastrService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  async reset() {
    try {
      if (!this.user.email) {
        this.toastr.error('Verifique seu e-mail e tente novamente', 'Ooops');
        return;
      }
      await this.authenticationService.resetPassword(this.user);
      this.showResetOptions = !this.showResetOptions;
    } catch (err) {
      let msg = 'Verifique os campos e tente novamente';
      if (err && err.error && err.error.error.message) {
        msg = err.error.error.message;
      }
      this.toastr.error(msg, 'Ooops');
    }
  }

}
