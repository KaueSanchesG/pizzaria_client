import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockLoginService: jasmine.SpyObj<LoginService>;

  beforeEach(() => {
    mockLoginService = jasmine.createSpyObj('LoginService', ['login']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: LoginService, useValue: mockLoginService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle password visibility', () => {
    component.showPassword = false;
    component.togglePassword();
    expect(component.showPassword).toBe(true);

    // Toggle it again
    component.togglePassword();
    expect(component.showPassword).toBe(false);
  });

  it('should display login error if login is not provided', () => {
    component.doLogin();
    expect(component.loginError).toBe('O campo Login é obrigatório.');
  });

  it('should display password error if password is not provided', () => {
    component.login = 'username';
    component.doLogin();
    expect(component.passwordError).toBe('O campo Senha é obrigatório.');
  });

  it('should handle login success', fakeAsync(() => {
    const mockUser = { data: { token: 'mockToken' } };
    mockLoginService.login;

    component.login = 'validUsername';
    component.senha = 'validPassword';
    component.doLogin();

    tick(2000);

    expect(component.isLoading).toBe(false);
    expect(component.errorMessage).toBe('');
    expect(component.credentialsError).toBe('');
  }));

  it('should handle login failure', fakeAsync(() => {
    const errorResponse = { error: 'Invalid credentials' };
    mockLoginService.login;

    component.login = 'invalidUsername';
    component.senha = 'invalidPassword';
    component.doLogin();

    tick(2100);

    expect(component.isLoading).toBe(false);
    expect(component.credentialsError).toBe(
      'Credenciais inválidas. Login ou a senha estão incorretas.'
    );
  }));
});
