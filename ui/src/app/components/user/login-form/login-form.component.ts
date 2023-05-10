import { Router } from '@angular/Router';
import { Component } from '@angular/core';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  user: User = {
    id: '',
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    isAuthor:false
  };

  constructor(
    private userService: UserService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  login() {
    this.userService.login(this.user)
      .subscribe(key => {
        console.log(this.user);
        if (key.status == "failure") {
          this.router.navigate(['/user/login']);
        } else {
          // console.log(key.jwt);
          this.tokenStorageService.saveToken(key.jwt);
          this.router.navigate(['/home'])
        }
        
      }
      );
    // console.log("Login User");
  }
}