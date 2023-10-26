import { Component } from '@angular/core';

interface Products {
  name: string;
  valor: number;
  editing: boolean;
}
interface Pizza {
  name: string;
  sabor: string;
  valor: number;
  editing: boolean;
}

const PRODUCTS: Products[] = [
  {
    name: 'Coca',
    valor: 12.0,
    editing: false,
  },
];
const PIZZA: Pizza[] = [
  {
    name: 'Coca',
    sabor: 'Coca',
    valor: 12.0,
    editing: false,
  },
];
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent {
  products = PRODUCTS;
  pizza = PIZZA;

  name = '';
  valor = '';

  resetEditing() {
    this.products.forEach((products) => (products.editing = false));
  }
}
