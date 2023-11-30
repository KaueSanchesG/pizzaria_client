import { Abstract } from './abstract';
import { Endereco } from './endereco';
import { Pedido } from './pedido';
import { User } from './user';

export class Cliente extends Abstract {
  nome!: String;
  cpf!: String;
  enderecoList!: Endereco[];
  pedidoList!: Pedido[];
}
