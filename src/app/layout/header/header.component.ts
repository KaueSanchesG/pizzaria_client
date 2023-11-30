import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private loginService: LoginService) {}

  isUserRoleUser(): boolean {
    return this.loginService.getUserRole() === 'USER';
  }
}
