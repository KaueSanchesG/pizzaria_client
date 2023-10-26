import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

    this.modal.open(modal, { size: 'lg' });
  }

  openDetailsModal(modal: any, pedido: Pedido) {
    this.produtosDoPedido = pedido.produtoList;
    this.pizzasDoPedido = pedido.pizzaList;

    this.modal.open(modal, { size: 'lg' });
  }

  //metodo para o disable

  disable(pedido: Pedido) {
    if (confirm('Tem certeza que deseja desativar este pedido?')) {
      this.service
        .delete(pedido.id)
        .then(() => {
          alert('Registro deletado');
        })
        .catch((error) => {
          console.log('Erro ao desativar o pedido:', error);
        });
    }
  }
}
