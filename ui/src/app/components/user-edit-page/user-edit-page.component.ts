import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/Router';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']
})
export class UserEditPageComponent {
  
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
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.user.id = String(this.route.snapshot.paramMap.get('id'));
    console.log(this.user.id)
    this.userService.getUser(this.user.id).subscribe(user => {
      this.user = user;
      console.log(this.user)
    });
  } 

  updateProfile(): void {
    this.userService.updateUser(this.user.id, this.user)
      .subscribe(updatedUser => {
        this.user = updatedUser;
        this.router.navigate(['/userpage']);
      });
  }


}
