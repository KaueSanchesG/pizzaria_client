import { Abstract } from './abstract';
import { Tamanho } from './enums/tamanho';
import { Sabor } from './sabor';

export class Pizza extends Abstract {
  nome!: String;
  valor!: number;
  tamanho!: Tamanho;
  saborList!: Sabor[];
}
