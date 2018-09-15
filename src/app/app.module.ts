import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';
import { AppComponent } from './app.component'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './guards/auth.guard'
import { AuthenticationService } from './services/authentication.service'
import { EventEmitterService } from './services/eventemiter.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component'
import { NavbarModule } from './components/navbar/navbar.module'
import { FooterComponent } from './components/footer/footer.component'
import { NotificationComponent } from './components/notification/notification.component'
import { OpenNotificationComponent } from './components/notification/openNotification/open-notification.component'
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component'
import { ChatComponent } from './components/chat/chat.component'
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map'
import { StorageService } from './services/storage.service';
import { HttpClientService } from './services/http-client.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    NotificationComponent,
    OpenNotificationComponent,
    ChatComponent,
    PagenotfoundComponent
  ],
  imports: [
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
    BrowserModule,
    NavbarModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    EventEmitterService,
    AuthenticationService,
    StorageService,
    HttpClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
