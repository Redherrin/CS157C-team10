import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/Router';
import jwt_decode from 'jwt-decode';

import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  token: string | null;
  username: string = "";

  constructor(
    private tokenStorageService: TokenStorageService
  ) {this.token = this.tokenStorageService.getToken();}

  ngOnInit() {
    console.log(this.token)
    if(this.token !== null){
      const decodedToken = jwt_decode(this.token) as { [key: string]: any };
      this.username = decodedToken['username'];
    }
  }

}
