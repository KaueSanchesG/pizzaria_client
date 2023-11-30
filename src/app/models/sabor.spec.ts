import { Sabor } from './sabor';

describe('Sabor', () => {
  it('should create an instance', () => {
    const sabor = new Sabor();
    expect(sabor).toBeTruthy();
  });

  it('should initialize properties correctly', () => {
    const sabor = new Sabor();
    expect(sabor.id).toBeUndefined();
    expect(sabor.nome).toBeUndefined();
  });

  it('should set and get id', () => {
    const sabor = new Sabor();
    sabor.id = 1;
    expect(sabor.id).toEqual(1);
  });

  it('should set and get nome', () => {
    const sabor = new Sabor();
    sabor.nome = 'Test Sabor';
    expect(sabor.nome).toEqual('Test Sabor');
  });
});
