import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, private storageService: StorageService) { }

    public login(data = {}) {
        return this.http.post(`${environment.API_URL}/users/login`, data).toPromise();
    }

    resetPassword(user = {}) {
        return this.http.post(`${environment.API_URL}/users/reset-password`, user).toPromise();
    }

    resetPasswordConfirm(user = {}) {
        return this.http.post(`${environment.API_URL}/users/reset-password-confirm`, user).toPromise();
    }

    logout() {
        this.storageService.set('user', null);
        this.storageService.set('token', null);
    }

    getLogged() {
        return this.storageService.get('user');
    }
}