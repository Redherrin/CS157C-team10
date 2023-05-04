import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = 'http://localhost:8080/user'
  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

  constructor(private http: HttpClient) { }

  getUser(id: String): Observable<User>{
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.userUrl}/register`, user);
  }

  updateUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.userUrl}/update`, user);
  }

  login(user: User): Observable<any>{
    return this.http.post<any>(`${this.userUrl}/login`, user, this.httpOptions);
  }

  // isAuthor(user: User): boolean {
  //   return user.isAuthor;
  // }

  // test() {
  //   window.sessionStorage
  // }

  // USER AUTHORIZATION
  authorize(): Observable<any> {
    return this.http.get<any>(`${this.userUrl}/auth`);
  }

  getAuthorAuth(): Observable<any> {
    return this.http.get<any>(`${this.userUrl}/auth/author`);
  }






}
