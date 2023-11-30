import { Pedido } from './pedido';
import { Cliente } from './cliente';
import { Funcionario } from './funcionario';
import { Pizza } from './pizza';
import { Produto } from './produto';

describe('Pedido', () => {
  let pedido: Pedido;

  beforeEach(() => {
    pedido = new Pedido();
  });

  it('should create an instance', () => {
    expect(pedido).toBeTruthy();
  });

  it('should initialize properties correctly', () => {
    expect(pedido.id).toBeUndefined();
    expect(pedido.cliente).toBeInstanceOf(Cliente);
    expect(pedido.produtoList).toEqual([]);
    expect(pedido.pizzaList).toEqual([]);
    expect(pedido.entrega).toBeUndefined();
    expect(pedido.formaDePagamento).toBeUndefined();
    expect(pedido.valorTotal).toBeUndefined();
    expect(pedido.dataHora).toBeInstanceOf(Date);
    expect(pedido.funcionario).toBeInstanceOf(Funcionario);
  });

  it('should set and get cliente', () => {
    const cliente = new Cliente();
    cliente.id = 1;
    pedido.cliente = cliente;
    expect(pedido.cliente).toEqual(cliente);
  });

  it('should set and get produtoList', () => {
    const produto1 = new Produto();
    produto1.id = 1;
    const produto2 = new Produto();
    produto2.id = 2;
    pedido.produtoList = [produto1, produto2];
    expect(pedido.produtoList).toEqual([produto1, produto2]);
  });

  it('should set and get pizzaList', () => {
    const pizza1 = new Pizza();
    pizza1.id = 1;
    const pizza2 = new Pizza();
    pizza2.id = 2;
    pedido.pizzaList = [pizza1, pizza2];
    expect(pedido.pizzaList).toEqual([pizza1, pizza2]);
  });

  it('should set and get entrega', () => {
    pedido.entrega = true;
    expect(pedido.entrega).toEqual(true);
  });

  it('should set and get formaDePagamento', () => {
    pedido.formaDePagamento = 'Cartão de Crédito';
    expect(pedido.formaDePagamento).toEqual('Cartão de Crédito');
  });

  it('should set and get valorTotal', () => {
    pedido.valorTotal = 50;
    expect(pedido.valorTotal).toEqual(50);
  });

  it('should set and get dataHora', () => {
    const dataHora = new Date('2023-12-01T12:00:00');
    pedido.dataHora = dataHora;
    expect(pedido.dataHora).toEqual(dataHora);
  });

  it('should set and get funcionario', () => {
    const funcionario = new Funcionario();
    funcionario.id = 1;
    pedido.funcionario = funcionario;
    expect(pedido.funcionario).toEqual(funcionario);
  });

  // Additional test cases as needed
});
