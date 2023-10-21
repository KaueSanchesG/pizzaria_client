import { Abstract } from './abstract';
import { Cliente } from './cliente';
import { Funcionario } from './funcionario';
import { Pizza } from './pizza';
import { Produto } from './produto';

export class Pedido extends Abstract {
  cliente!: Cliente;
  produtoList!: Produto[];
  pizzaList!: Pizza[];
  entrega!: boolean;
  formaDePagamento!: String;
  valorTotal!: number;
  dataHora!: Date;
  funcionario!: Funcionario;
}
