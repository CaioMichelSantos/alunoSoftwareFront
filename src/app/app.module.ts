import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { routing } from './app.routes';
import { AppComponent } from './app.component'

import { AuthGuard } from './guards/auth.guard'
import { AuthenticationService } from './services/authentication.service'
import { EventEmitterService } from './services/eventemiter.service'

import { LoginComponent } from './components/login/login.component'
import { NavbarModule } from './components/navbar/navbar.module'
import { FooterComponent } from './components/footer/footer.component'
import { NotificationComponent } from './components/notification/notification.component'
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component'
import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    NotificationComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    EventEmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
