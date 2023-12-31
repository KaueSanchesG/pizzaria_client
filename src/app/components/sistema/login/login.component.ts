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
  constructor(private authLogin: LoginService, private router: Router) {
    this.authLogin.removerToken;
  }

  showPassword = false;
  login = '';
  senha: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  loginError: string = '';
  passwordError: string = '';
  credentialsError: string = '';

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  doLogin() {
    this.loginError = '';
    this.passwordError = '';

    if (!this.login) {
      this.loginError = 'O campo Login é obrigatório.';
      return;
    }

    if (!this.senha) {
      this.passwordError = 'O campo Senha é obrigatório.';
      return;
    }

    const model: Login = {
      username: this.login,
      password: this.senha,
    };

    this.isLoading = true;
    this.errorMessage = '';

    this.authLogin
      .login(model)
      .then((user) => {
        setTimeout(() => {
          console.log(user);
          console.log('Token do usuário:', user.data.token);
          this.authLogin.addToken(user.data.token);
          this.router.navigate(['/order']);
        }, 2000);
      })
      .catch((error) => {
        setTimeout(() => {
          this.credentialsError =
            'Credenciais inválidas. Login ou a senha estão incorretas.';
        }, 2100);
      })
      .finally(() => {
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
        this.errorMessage = '';
      });
  }
}
