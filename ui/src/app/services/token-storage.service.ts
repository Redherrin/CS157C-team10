import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  

  constructor() { }

  logout() {
    window.localStorage.clear();
  }

  saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem("loggedIn", "true");
  }

  getToken() {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  loggedIn() {
    return window.localStorage.getItem("loggedIn");
  }







}
