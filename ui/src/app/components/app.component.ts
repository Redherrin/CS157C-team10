import { Component } from '@angular/core';
import jwt_decode from 'jwt-decode';

import { UserService } from '../services/user.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'All Your Rock';
  token: string | null;
  username = '';

  constructor(
    public tokenStorageService: TokenStorageService,
  ) {
    this.token = this.tokenStorageService.getToken();
    if(this.token !== null){
      const decodedToken = jwt_decode(this.token) as { [key: string]: any };
      this.username = decodedToken['username'];
    }
  }
}