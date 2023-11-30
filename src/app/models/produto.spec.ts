import { Produto } from './produto';

describe('Produto', () => {
  it('should create an instance', () => {
    const produto = new Produto();
    expect(produto).toBeTruthy();
  });

  it('should initialize properties correctly', () => {
    const produto = new Produto();
    expect(produto.id).toBeUndefined();
    expect(produto.nome).toBeUndefined();
    expect(produto.valor).toBeUndefined();
  });

  it('should set and get id', () => {
    const produto = new Produto();
    produto.id = 1;
    expect(produto.id).toEqual(1);
  });

  it('should set and get nome', () => {
    const produto = new Produto();
    produto.nome = 'Test Produto';
    expect(produto.nome).toEqual('Test Produto');
  });

  it('should set and get valor', () => {
    const produto = new Produto();
    produto.valor = 10.5;
    expect(produto.valor).toEqual(10.5);
  });
});
