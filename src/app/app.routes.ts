import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './components/notification/notification.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ChatComponent } from './components/chat/chat.component';
import { EvaluationsComponent } from './components/evaluations/evaluations.component';
import { ClassComponent } from './components/class/class.component'
import { AuthGuard } from "./guards/auth.guard"
import { FoodRegisterComponent } from './components/food-register/food-register.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ResetPasswordConfirmComponent } from './components/reset-password-confirm/reset-password-confirm.component';

const appRoutes: Routes = [
  { path: 'notification', component: NotificationComponent, canActivate: [AuthGuard] },
  { path: 'chat', component: ChatComponent },
  { path: 'evaluations', component: EvaluationsComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'food-register', component: FoodRegisterComponent },
  { path: 'class', component: ClassComponent },
  { path: 'pageNotFound', component: PagenotfoundComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'reset-password-confirm', component: ResetPasswordConfirmComponent },
  { path: '**', redirectTo: 'login' },


];

export const routing = RouterModule.forRoot(appRoutes)