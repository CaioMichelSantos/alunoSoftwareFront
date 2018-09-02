import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions, Response } from '@angular/http';


@Injectable()
export class TokenApiService {
    constructor() { 
    }

jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
        let headers = new Headers({ 'Authorization': currentUser.token });
        return new RequestOptions({ headers: headers });
    }
}

guest(){
    let headers = new Headers({ 'guest-authorization': 'implementtoken' });
    return new RequestOptions({ headers: headers }); 
}

}