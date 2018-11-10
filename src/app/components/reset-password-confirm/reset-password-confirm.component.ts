import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password-confirm',
  templateUrl: './reset-password-confirm.component.html',
  styleUrls: ['./reset-password-confirm.component.scss']
})
export class ResetPasswordConfirmComponent implements OnInit {

  user: any = {};
  constructor(
    private toastr: ToastrService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  async confirmReset() {
    try {
      if (!this.user.password || !this.user.confirmPassword) {
        this.toastr.error('Verifique os campos e tente novamente', 'Oooops');
        return;
      }
    } catch (err) {

    }
  }

}
