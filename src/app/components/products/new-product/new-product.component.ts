import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent {
  produto: Produto = new Produto();

  @Output() retorno = new EventEmitter<Produto>();

  produtoService = inject(ProdutoService);

  save() {
    this.produtoService
      .create(this.produto)
      .then((response) => {
        this.retorno.emit(this.produto);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
