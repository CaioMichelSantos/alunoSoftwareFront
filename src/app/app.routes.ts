import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './components/notification/notification.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ChatComponent } from './components/chat/chat.component';
import { EvaluationsComponent } from './components/evaluations/evaluations.component';
import { ClassComponent } from './components/class/class.component'
import { AuthGuard } from "./guards/auth.guard"

const appRoutes: Routes  = [
  { path:'notification', component: NotificationComponent, canActivate: [AuthGuard]},
  { path:'chat', component: ChatComponent},
  { path:'evaluations', component: EvaluationsComponent},
  { path:'class', component: ClassComponent},
  { path:'pageNotFound', component: PagenotfoundComponent},
  { path:'login',  component: LoginComponent},
  { path: '**', redirectTo: 'login'},

  
];

export const routing = RouterModule.forRoot(appRoutes)