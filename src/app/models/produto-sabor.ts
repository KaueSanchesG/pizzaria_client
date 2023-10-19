import { Abstract } from './abstract';
import { Produto } from './produto';
import { Sabor } from './sabor';

export class ProdutoSabor extends Abstract {
  produto!: Produto;
  saborList!: Sabor[];
}
