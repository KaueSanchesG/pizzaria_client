import { Abstract } from './abstract';
import { Cliente } from './cliente';
import { Funcionario } from './funcionario';
import { ProdutoSabor } from './produto-sabor';

export class Pedido extends Abstract {
  cliente!: Cliente;
  produtoSaborList!: ProdutoSabor[];
  entrega!: boolean;
  formaDePagamento!: String;
  valorTotal!: number;
  dataHora!: Date;
  funcionario!: Funcionario;
}
