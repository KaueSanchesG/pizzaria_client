import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { window } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { Endereco } from 'src/app/models/endereco';
import { ClienteService } from 'src/app/services/cliente.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent {
  list: Cliente[] = [];
  clienteSelecionado: Cliente = new Cliente();

  service = inject(ClienteService);
  modal = inject(NgbModal);

  enderecosDoCliente: Endereco[] = [];
  newEnderecosDoCliente: Endereco[] = [];

  AddNewAdress() {
    this.newEnderecosDoCliente.push(new Endereco());
    console.log('adasdads', this.newEnderecosDoCliente.length);
  }
  saveAdress() {
    // window?.location?.reload();
  }
  constructor() {
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

  // resetEditing() {
  //   this.list.forEach((products) => (products.editing = false));
  // }
  openModal(modal: any, cliente: Cliente) {
    this.enderecosDoCliente = cliente.enderecoList;

    this.modal.open(modal, { size: 'lg' });
  }

  openCreateModal(modal: any) {
    this.clienteSelecionado = new Cliente();

    this.modal.open(modal, { size: 'lg' });
  }
}
