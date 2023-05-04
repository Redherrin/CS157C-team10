import { Component } from '@angular/core';
import { Router } from '@angular/Router';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  user: User = {
    id: '',
    username: '',
    password: '',
    email: '',
    isAuthor: false
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  saveUser(): void {
    this.userService.createUser(this.user)
      .subscribe(newUser => {
        this.user = newUser;
        this.user.isAuthor = false;
        this.router.navigate(['/home']);
      });
    // console.log("Saved User");
  }


}

