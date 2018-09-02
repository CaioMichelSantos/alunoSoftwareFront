import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { environment } from '../../environments/environment';


@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { 
    }

    login(email, password) {
        return this.http.post(`${environment.URL_BASE}/app/users/login`, { email: email, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }
    loginAccountKit(objRegister){
        return  this.http.post(`${environment.URL_BASE}/app/users/login-account-kit`, objRegister).map((response: Response) =>response.json());
     }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    getLogged() {
        let logged = JSON.parse(localStorage.getItem('currentUser'))
        return logged;
    }
}