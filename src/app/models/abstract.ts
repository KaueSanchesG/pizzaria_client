export class Abstract {
  id!: number;
  cadastro!: Date;
  atualizado!: Date;
  ativo!: boolean;

  constructor() {
    this.id;
    this.cadastro = new Date();
  }
}
