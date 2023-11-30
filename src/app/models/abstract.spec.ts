import { Abstract } from './abstract';

describe('Abstract', () => {
  it('should create an instance', () => {
    const abstractInstance = new Abstract();
    expect(abstractInstance).toBeTruthy();
  });

  it('should set id to a number', () => {
    const abstractInstance = new Abstract();
    expect(typeof abstractInstance.id).toBe('number');
  });

  it('should set cadastro to a Date', () => {
    const abstractInstance = new Abstract();
    expect(abstractInstance.cadastro instanceof Date).toBe(true);
  });

  it('should set atualizado to a Date', () => {
    const abstractInstance = new Abstract();
    expect(abstractInstance.atualizado instanceof Date).toBe(true);
  });

  it('should set ativo to a boolean', () => {
    const abstractInstance = new Abstract();
    expect(typeof abstractInstance.ativo).toBe('boolean');
  });

  it('should initialize cadastro to the current date', () => {
    const abstractInstance = new Abstract();
    const currentDate = new Date();
    // Allow for a small difference in milliseconds due to asynchronous execution
    expect(
      Math.abs(abstractInstance.cadastro.getTime() - currentDate.getTime())
    ).toBeLessThanOrEqual(5);
  });

  // Add more test cases as needed
});
