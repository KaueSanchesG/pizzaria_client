import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedido } from 'src/app/models/pedido';
import { Produto } from 'src/app/models/produto';
import { Pizza } from 'src/app/models/pizza';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  list: Pedido[] = [];

  pedidoSelecionado: Pedido = new Pedido();
  selectedOption: string = '1';

  produtosDoPedido: Produto[] = [];
  pizzasDoPedido: Pizza[] = [];

  modalref!: NgbModalRef;

  constructor(private modal: NgbModal, private service: PedidoService) {
    this.listBySelectedOption();
  }

  //metodos para os filtros

  onFilterChange() {
    this.listBySelectedOption();
  }

  listBySelectedOption() {
    if (this.selectedOption == '1') {
      this.listAtivo();
    } else if (this.selectedOption === '2') {
      this.listAll();
    } else if (this.selectedOption === '3') {
      this.listEntrega();
    }
  }

  //metodos de listagem

  listAtivo() {
    this.service
      .listByAtivo()
      .then((response) => {
        this.list = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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

  listEntrega() {
    this.service
      .getPedidoByEntrega()
      .then((response) => {
        this.list = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //Funções para arir modais

  openNewOrderModal(modal: any) {
    this.pedidoSelecionado = new Pedido();

    this.modalref = this.modal.open(modal, { size: 'lg' });
  }

  openDetailsModal(modal: any, pedido: Pedido) {
    this.produtosDoPedido = pedido.produtoList;
    this.pizzasDoPedido = pedido.pizzaList;

    this.modal.open(modal, { size: 'lg' });
  }
  openDisableModal(modal: any, pedido: Pedido) {
    this.modal.open(modal, { size: 'md' });
    this.pedidoSelecionado = pedido;
  }
  //metodo para o disable

  disable() {
    console.log('selecionado', this.pedidoSelecionado);

    this.service.delete(this.pedidoSelecionado.id).catch((error) => {
      console.log('Erro ao desativar o pedido:', error);
    });

    location.reload();
  }

  atualizar() {
    this.listBySelectedOption();
    this.modalref.dismiss();
  }
}
