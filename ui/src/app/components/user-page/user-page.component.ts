import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import jwt_decode from 'jwt-decode';
import { User } from 'src/app/models/user';

import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  token: string | null;
  user: User = {
    id: '',
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    isAuthor: false
  };

  constructor(
    private tokenStorageService: TokenStorageService,
    private userService: UserService,
    private router: Router
  ) {this.token = this.tokenStorageService.getToken();}

  ngOnInit() {
    if(this.token !== null){
      const decodedToken = jwt_decode(this.token) as { [key: string]: any };
      console.log(decodedToken)
      this.user.username = decodedToken['username'];
      this.userService.getUserByUsername(this.user.username).subscribe(user =>
        {
          this.user = user;
          console.log(this.user);
        })
    }
  }

  editProfile(id: String): void{
    console.log(id);
    this.router.navigate(['/edit-profile', id]);
  }

}
