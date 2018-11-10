import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-confirm',
  templateUrl: './reset-password-confirm.component.html',
  styleUrls: ['./reset-password-confirm.component.scss']
})
export class ResetPasswordConfirmComponent implements OnInit {

  user: any = {};
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((query) => {
      if (query.code) {
        this.user.code = query.code;
      }
    });
  }

  async confirmReset() {
    try {
      if (!this.user.password || !this.user.confirmPassword) {
        this.toastr.error('Verifique os campos e tente novamente', 'Oooops');
        return;
      }
      await this.authenticationService.resetPasswordConfirm(this.user);
      this.toastr.success('Senha atualizada com sucesso');
      this.router.navigate(['/login']);

    } catch (err) {
      this.toastr.error('Não foi possível atualizar a senha', 'Oooops');
    }
  }

}
