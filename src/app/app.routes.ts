import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './components/notification/notification.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component'

import { AuthGuard } from "./guards/auth.guard"

const appRoutes: Routes  = [
  { path:'notification', component: NotificationComponent, canActivate: [AuthGuard]},
  { path:'pageNotFound', component: PagenotfoundComponent},
  { path:'login',  component: LoginComponent},
  { path: '**', redirectTo: 'login'},

  
];

export const routing = RouterModule.forRoot(appRoutes)