import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pizza } from 'src/app/models/pizza';
import { Produto } from 'src/app/models/produto';
import { Sabor } from 'src/app/models/sabor';
import { PizzaService } from 'src/app/services/pizza.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  pizzaList: Pizza[] = [];
  produtoList: Produto[] = [];

  produtoSelecionado: Produto = new Produto();
  pizzaSelecionada: Pizza = new Pizza();

  saboresDaPizza: Sabor[] = [];

  modalref!: NgbModalRef;

  constructor(
    private modal: NgbModal,
    private pizzaService: PizzaService,
    private produtoService: ProdutoService
  ) {
    this.listAll();
  }

  listAll() {
    this.produtoService
      .list()
      .then((resposne) => {
        this.produtoList = resposne.data;
      })
      .catch((error) => {
        console.log(error);
      });

    this.pizzaService
      .list()
      .then((resposne) => {
        this.pizzaList = resposne.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  openModal(modal: any, pizza: Pizza) {
    this.saboresDaPizza = pizza.saborList;

    this.modal.open(modal, { size: 'lg' });
  }

  openCreatePizzaModal(modal: any) {
    this.pizzaSelecionada = new Pizza();

    this.modalref = this.modal.open(modal, { size: 'lg' });
  }
  openCreateProductModal(modal: any) {
    this.produtoSelecionado = new Produto();

    this.modalref = this.modal.open(modal, { size: 'lg' });
  }
  atualizar() {
    this.listAll();
    this.modalref.dismiss();
  }
}
