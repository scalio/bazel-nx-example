import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {
    private apiUrl = '/api';

    constructor(private http: HttpClient) { }

    register(user: User) {
        return this.http.post(`${this.apiUrl}/auth/register`, user);
    }

    update(user: User) {
        return this.http.put(`${this.apiUrl}/users/${user.id}`, user);
    }
}
