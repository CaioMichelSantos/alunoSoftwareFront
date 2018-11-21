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

  create(content): any {
    const user = this.authenticationService.getLogged();
    return this.httpClientService.post(this.url, content);
  }

  get(params = {}): any {
    const url = this.httpClientService.getUrl(`${this.url}`, params);
    return this.httpClientService.get(url);
  }

  getById(id): any {
    const url = `${this.url}/${id}`;
    return this.httpClientService.get(url);
  }

  update(content): any {
    return this.httpClientService.put(`${this.url}/${content._id}`, content);
  }

  delete(contentId): any {
    return this.httpClientService.delete(`${this.url}/${contentId}`);
  }
