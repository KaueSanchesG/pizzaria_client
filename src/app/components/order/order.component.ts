import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  pedidoSelecionado: Pedido = new Pedido();

  constructor(private modal: NgbModal, private service: PedidoService) {
    this.listAll();
  }

  listAll() {
    this.service
      .list()
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  openNewOrderModal(modal: any) {
    this.pedidoSelecionado = new Pedido();

    this.modal.open(modal, { size: 'lg' });
  }
}
