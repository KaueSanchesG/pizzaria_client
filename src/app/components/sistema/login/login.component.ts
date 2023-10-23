import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/auth/login';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authLogin: LoginService, private router: Router) {}

  showPassword = false;
  login = '';
  senha: string = '';

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  doLogin() {
    const model: Login = {
      login: this.login,
      senha: this.senha,
    };

    this.authLogin
      .verify(model)
      .then((response) => {
        alert(response.data);
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  }
}
