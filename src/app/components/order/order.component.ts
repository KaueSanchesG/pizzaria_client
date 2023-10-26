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

  produtosDoPedido: Produto[] = [];
  pizzasDoPedido: Pizza[] = [];

  constructor(private modal: NgbModal, private service: PedidoService) {
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

  openNewOrderModal(modal: any) {
    this.pedidoSelecionado = new Pedido();

    this.modal.open(modal, { size: 'lg' });
  }

  openDetailsModal(modal: any, pedido: Pedido) {
    this.produtosDoPedido = pedido.produtoList;
    this.pizzasDoPedido = pedido.pizzaList;

    this.modal.open(modal, { size: 'lg' });
  }
}
