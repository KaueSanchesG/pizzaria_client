import { Abstract } from './abstract';
import { Pedido } from './pedido';

export class Funcionario extends Abstract {
  nome!: String;
  pedidoList!: Pedido[];
  login!: String;
  senha!: String;
}
