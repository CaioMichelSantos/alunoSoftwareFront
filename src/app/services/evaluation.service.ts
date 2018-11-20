import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  url: any = `${environment.API_URL}/evaluation`;

  constructor(private authenticationService: AuthenticationService, private httpClientService: HttpClientService) { }

  get() {
    const user = this.authenticationService.getLogged();
    return this.httpClientService.get(`${this.url}/${user._id}`);
  }

}
