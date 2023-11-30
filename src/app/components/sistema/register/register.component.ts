import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { UserService } from 'src/app/services/auth/user.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private userService: UserService,
    private funcionarioService: FuncionarioService,
    private router: Router
  ) {}

  funcionario: Funcionario = new Funcionario();
  user: User = new User();

  salvar() {
    this.userService
      .create(this.user)
      .then((response) => {
        console.log(`User ${response.data.username} criado com sucesso`);
        this.funcionario.credentials = this.user;
        this.funcionarioService
          .create(this.funcionario)
          .then((response) => {
            console.log(`Funcionário ${response.data.nome} criado com sucesso`);
            this.router.navigate(['/']);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
