import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    const user = new User();
    expect(user).toBeTruthy();
  });

  it('should initialize properties correctly', () => {
    const user = new User();
    expect(user.id).toBeUndefined();
    expect(user.username).toBeUndefined();
    expect(user.password).toBeUndefined();
    expect(user.role).toBeUndefined();
  });

  it('should set and get id', () => {
    const user = new User();
    user.id = 1;
    expect(user.id).toEqual(1);
  });

  it('should set and get username', () => {
    const user = new User();
    user.username = 'testuser';
    expect(user.username).toEqual('testuser');
  });

  it('should set and get password', () => {
    const user = new User();
    user.password = 'testpassword';
    expect(user.password).toEqual('testpassword');
  });

  it('should set and get role', () => {
    const user = new User();
    user.role = 'admin';
    expect(user.role).toEqual('admin');
  });
});
