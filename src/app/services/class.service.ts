import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  url: any = `${environment.API_URL}/classroom`;

  constructor(
    private authenticationService: AuthenticationService,
    private httpClientService: HttpClientService
  ) { }

  get(): any {
    const user = this.authenticationService.getLogged();
    const url = `${this.url}?user=${user._id}`;
    return this.httpClientService.get(url);
  }

  getById(id): any {
    const url = `${this.url}/${id}`;
    return this.httpClientService.get(url);
  }

  confirmPresence(classRoom) {
    const user = this.authenticationService.getLogged();
    let url = `${this.url}/${classRoom._id}/presence/${user._id}`;
    if (!classRoom.userConfirmed) {
      url = `${url}?add=true`;
    }
    return this.httpClientService.put(url);
  }

}
