import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

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
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  router = inject(Router);

  products = PRODUCTS;
  pizza = PIZZA;

  name = '';
  valor = '';

  resetEditing() {
    this.products.forEach((products) => (products.editing = false));
  }
  novoClient() {
    this.router.navigate(['/register']);
  }
}
