import { Component } from '@angular/core';

import { UserService } from '../services/user.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'All Your Rock';

  constructor(
    public tokenStorageService: TokenStorageService
  ) {}
}