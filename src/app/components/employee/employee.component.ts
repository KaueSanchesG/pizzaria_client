import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Funcionario } from 'src/app/models/funcionario';
import { LoginService } from 'src/app/services/auth/login.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  list: Funcionario[] = [];

  service = inject(FuncionarioService);
  modal = inject(NgbModal);

  constructor(private router: Router, private loginService: LoginService) {
    this.listAll();
  }

  listAll() {
    this.service
      .list()
      .then((response) => {
        this.list = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  openModal(modal: any) {
    this.modal.open(modal, { size: 'lg' });
  }

  novoClient() {
    // Verificar se o usuário não tem a role 'USER' antes de navegar para /register
    if (!this.isUserRoleUser()) {
      this.router.navigate(['/register']);
    } else {
      console.log(
        'Usuário com a role USER. Não é permitido criar funcionários.'
      );
      // Adicione lógica adicional ou redirecionamento conforme necessário.
    }
  }

  isUserRoleUser(): boolean {
    return this.loginService.getUserRole() === 'USER';
  }
}
