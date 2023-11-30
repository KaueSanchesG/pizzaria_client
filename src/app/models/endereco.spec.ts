import { Endereco } from './endereco';
import { Cliente } from './cliente';

describe('Endereco', () => {
  it('should create an instance', () => {
    const endereco = new Endereco();
    expect(endereco).toBeTruthy();
  });

  it('should set and get rua', () => {
    const endereco = new Endereco();
    endereco.rua = 'Rua A';
    expect(endereco.rua).toEqual('Rua A');
  });

  it('should set and get numero', () => {
    const endereco = new Endereco();
    endereco.numero = 123;
    expect(endereco.numero).toEqual(123);
  });

  it('should set and get cliente', () => {
    const endereco = new Endereco();
    const cliente = new Cliente();
    // Set up cliente properties
    endereco.cliente = [cliente];
    expect(endereco.cliente).toEqual([cliente]);
  });

  // Add more test cases as needed
});
