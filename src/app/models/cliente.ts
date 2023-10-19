import { Abstract } from './abstract';
import { Endereco } from './endereco';
import { Pedido } from './pedido';

export class Cliente extends Abstract {
  nome!: String;
  cpf!: String;
  enderecoList!: Endereco[];
  pedidoList!: Pedido[];
}
