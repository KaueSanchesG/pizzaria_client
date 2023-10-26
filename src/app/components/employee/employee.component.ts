import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

// interface Products {
//   name: string;
//   valor: number;
//   editing: boolean;
// }
// interface Pizza {
//   name: string;
//   sabor: string;
//   valor: number;
//   editing: boolean;
// }

// const PRODUCTS: Products[] = [
//   {
//     name: 'Coca',
//     valor: 12.0,
//     editing: false,
//   },
// ];
// const PIZZA: Pizza[] = [
//   {
//     name: 'Coca',
//     sabor: 'Coca',
//     valor: 12.0,
//     editing: false,
//   },
// ];
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  list: Funcionario[] = [];

  service = inject(FuncionarioService);
  modal = inject(NgbModal);

  constructor(private router: Router) {
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
    this.router.navigate(['/register']);
  }
}
