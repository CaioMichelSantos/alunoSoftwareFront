import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClientService } from './http-client.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClientService: HttpClientService,
    private authenticationService: AuthenticationService) { }

  load() {
    return this.httpClientService.get(`${environment.API_URL}/food`);
  }

  loadDailyFood(date) {
    const user = this.authenticationService.getLogged();
    return this.httpClientService.get(`${environment.API_URL}/food/${user._id}?date=${date}`);
  }

  create(body) {
    const user = this.authenticationService.getLogged();
    return this.httpClientService.post(`${environment.API_URL}/food/${user._id}`, body);
  }

  update(body) {
    const user = this.authenticationService.getLogged();
    return this.httpClientService.put(`${environment.API_URL}/food/${user._id}/${body._id}`, body);
  }
}
