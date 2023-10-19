import { Abstract } from './abstract';
import { Tamanho } from './enums/tamanho';

export class Produto extends Abstract {
  nome!: String;
  valor!: number;
  tamanho!: Tamanho;
}
