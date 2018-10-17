import { environment } from '../environments/environment';
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
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { ClassComponent } from './components/class/class.component'
<<<<<<< HEAD
import { EditClassComponent } from './components/class/editClass/edit-class.component'
import { Ng2SmartTableModule } from 'ng2-smart-table';
=======

>>>>>>> 6679147c05295ade8cd13562ef121b40b27b5d72
import { ServiceWorkerModule } from '@angular/service-worker';
import { EvaluationsComponent } from './components/evaluations/evaluations.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    NotificationComponent,
    OpenNotificationComponent,
    ChatComponent,
    PagenotfoundComponent,
    EvaluationsComponent,
    ClassComponent,
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
    Ng2SmartTableModule,
    BrowserAnimationsModule,
    YoutubePlayerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
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
