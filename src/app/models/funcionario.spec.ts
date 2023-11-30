import { Funcionario } from './funcionario';
import { Pedido } from './pedido';
import { User } from './user';

describe('Funcionario', () => {
  it('should create an instance', () => {
    const funcionario = new Funcionario();
    expect(funcionario).toBeTruthy();
  });

  it('should set and get nome', () => {
    const funcionario = new Funcionario();
    funcionario.nome = 'John Doe';
    expect(funcionario.nome).toEqual('John Doe');
  });

  it('should set and get login', () => {
    const funcionario = new Funcionario();
    funcionario.login = 'john_doe';
    expect(funcionario.login).toEqual('john_doe');
  });

  it('should set and get senha', () => {
    const funcionario = new Funcionario();
    funcionario.senha = 'password123';
    expect(funcionario.senha).toEqual('password123');
  });

  it('should set and get credentials', () => {
    const funcionario = new Funcionario();
    const credentials = new User();
    credentials.username = 'john_doe';
    credentials.password = 'password123';
    funcionario.credentials = credentials;
    expect(funcionario.credentials).toEqual(credentials);
  });

  it('should set and get pedidoList', () => {
    const funcionario = new Funcionario();
    const pedido = new Pedido();
    // Set up pedido properties
    funcionario.pedidoList = [pedido];
    expect(funcionario.pedidoList).toEqual([pedido]);
  });

  // Add more test cases as needed
});
