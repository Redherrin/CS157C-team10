import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = 'http://localhost:8080/user'

  constructor(private http: HttpClient) { }

  getUser(id: String): Observable<User>{
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.userUrl}/register`, user);
  }

  updateUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.userUrl}/update`, user);
  }


}
