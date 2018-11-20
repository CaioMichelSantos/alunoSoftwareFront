import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClientService } from './http-client.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private httpClientService: HttpClientService,
    private authenticationService: AuthenticationService) { }

  get() {
    const user = this.authenticationService.getLogged();
    return this.httpClientService.get(`${environment.API_URL}/content?user=${user._id}`);
  }

}
