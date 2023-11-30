import { Cliente } from './cliente';
import { Endereco } from './endereco';
import { Pedido } from './pedido';

describe('Cliente', () => {
  it('should create an instance', () => {
    const cliente = new Cliente();
    expect(cliente).toBeTruthy();
  });

  it('should set and get nome', () => {
    const cliente = new Cliente();
    cliente.nome = 'John Doe';
    expect(cliente.nome).toEqual('John Doe');
  });

  it('should set and get cpf', () => {
    const cliente = new Cliente();
    cliente.cpf = '123.456.789-00';
    expect(cliente.cpf).toEqual('123.456.789-00');
  });

  it('should set and get enderecoList', () => {
    const cliente = new Cliente();
    const endereco = new Endereco();
    // Set up endereco properties
    cliente.enderecoList = [endereco];
    expect(cliente.enderecoList).toEqual([endereco]);
  });

  it('should set and get pedidoList', () => {
    const cliente = new Cliente();
    const pedido = new Pedido();
    // Set up pedido properties
    cliente.pedidoList = [pedido];
    expect(cliente.pedidoList).toEqual([pedido]);
  });

  // Add more test cases as needed
});
