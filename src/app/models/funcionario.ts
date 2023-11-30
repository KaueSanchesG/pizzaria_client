import { Abstract } from './abstract';
import { Pedido } from './pedido';
import { User } from './user';

export class Funcionario extends Abstract {
  nome!: String;
  pedidoList!: Pedido[];
  credentials!: User;
  login!: String;
  senha!: String;
}
