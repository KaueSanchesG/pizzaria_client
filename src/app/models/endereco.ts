import { Abstract } from './abstract';
import { Cliente } from './cliente';

export class Endereco extends Abstract {
  rua!: String;
  numero!: number;
  cliente!: Cliente[];
}
