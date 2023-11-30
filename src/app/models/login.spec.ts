import { Login } from './login';

describe('Login', () => {
  it('should create an instance', () => {
    const login = new Login();
    expect(login).toBeTruthy();
  });

  it('should set and get username', () => {
    const login = new Login();
    login.username = 'john_doe';
    expect(login.username).toEqual('john_doe');
  });

  it('should set and get password', () => {
    const login = new Login();
    login.password = 'password123';
    expect(login.password).toEqual('password123');
  });

  // Add more test cases as needed
});
