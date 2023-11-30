import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { Endereco } from 'src/app/models/endereco';
import { ClienteService } from 'src/app/services/cliente.service';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss'],
})
export class NewClientComponent {
  enderecos: Endereco[] = [];
  enderecoSelecionado: Endereco[] = [];
  // isChecked: boolean = false;

  cliente: Cliente = new Cliente();

  enderecoService = inject(EnderecoService);
  clienteService = inject(ClienteService);

  @Output() retorno = new EventEmitter<Cliente>();

  ngOnInit() {
    this.getEnderecos();
  }

  save() {
    this.cliente.enderecoList = this.enderecoSelecionado;

    this.clienteService
      .create(this.cliente)
      .then((response) => {
        alert('Cliente cadastrado!');
        this.retorno.emit(this.cliente);
      })
      .catch((error) => {
        console.log(error);
      });
    location.reload();
  }

  getEnderecos() {
    this.enderecoService
      .list()
      .then((response) => {
        this.enderecos = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  toggleEnderecoSelection(endereco: Endereco) {
    if (this.enderecoSelecionado.includes(endereco)) {
      this.enderecoSelecionado = this.enderecoSelecionado.filter(
        (p) => p !== endereco
      );
    } else {
      this.enderecoSelecionado.push(endereco);
    }
  }
}
