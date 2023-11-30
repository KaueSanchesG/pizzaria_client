import { Pizza } from './pizza';
import { Tamanho } from './enums/tamanho';
import { Sabor } from './sabor';

describe('Pizza', () => {
  it('should create an instance', () => {
    const pizza = new Pizza();
    expect(pizza).toBeTruthy();
  });

  it('should initialize properties correctly', () => {
    const pizza = new Pizza();
    expect(pizza.nome).toBeUndefined();
    expect(pizza.valor).toBeUndefined();
    expect(pizza.tamanho).toBeUndefined();
    expect(pizza.saborList).toEqual([]);
  });

  it('should set and get nome', () => {
    const pizza = new Pizza();
    pizza.nome = 'Test Pizza';
    expect(pizza.nome).toEqual('Test Pizza');
  });

  it('should set and get valor', () => {
    const pizza = new Pizza();
    pizza.valor = 15.99;
    expect(pizza.valor).toEqual(15.99);
  });

  it('should set and get tamanho', () => {
    const pizza = new Pizza();
    pizza.tamanho = Tamanho.G;
    expect(pizza.tamanho).toEqual(Tamanho.G);
  });
});
