import { Component } from '@angular/core';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
})
export class NewOrderComponent {
  mostrar: boolean = false;

  openNewOrderModal() {
    this.mostrar = !this.mostrar;
  }
}
