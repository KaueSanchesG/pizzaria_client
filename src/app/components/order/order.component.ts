import { Component, ViewChild } from '@angular/core';
import { NewOrderComponent } from './new-order/new-order.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  @ViewChild(NewOrderComponent)
  newOrderModal!: NewOrderComponent;
  openNewOrderModal() {
    this.newOrderModal.openNewOrderModal();
  }
}
