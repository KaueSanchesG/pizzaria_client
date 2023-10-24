import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router
  ) {}

  funcionario: Funcionario = new Funcionario();

  salvar() {
    this.funcionarioService
      .create(this.funcionario)
      .then((response) => {
        console.log(`Funcionário ${response.data.nome} criado com sucesso`);
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
