// rotaguard.guard.spec.ts
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { RotaguardGuard } from './rotaguard.guard';
import { LoginService } from '../services/auth/login.service';

describe('RotaguardGuard', () => {
  let guard: RotaguardGuard;
  let router: Router;
  let loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [RotaguardGuard],
    });

    guard = TestBed.inject(RotaguardGuard);
    router = TestBed.inject(Router);
    loginService = TestBed.inject(LoginService);

    spyOn(router, 'navigate');
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access if user is authenticated and has a role other than USER', () => {
    spyOn(loginService, 'isAuthenticated').and.returnValue(true);
    spyOn(loginService, 'getUserRole').and.returnValue('ADMIN');

    const canActivate = guard.canActivate(
      createActivatedRouteSnapshot(),
      createRouterStateSnapshot()
    );

    expect(canActivate).toBe(true);
    expect(loginService.isAuthenticated).toHaveBeenCalled();
    expect(loginService.getUserRole).toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should navigate to /login if user is not authenticated', () => {
    spyOn(loginService, 'isAuthenticated').and.returnValue(false);

    const canActivate = guard.canActivate(
      createActivatedRouteSnapshot(),
      createRouterStateSnapshot()
    );

    expect(canActivate).toBe(false);
    expect(loginService.isAuthenticated).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should navigate to /order if user has USER role', () => {
    spyOn(loginService, 'isAuthenticated').and.returnValue(true);
    spyOn(loginService, 'getUserRole').and.returnValue('USER');

    const canActivate = guard.canActivate(
      createActivatedRouteSnapshot(),
      createRouterStateSnapshot()
    );

    expect(canActivate).toBe(false);
    expect(loginService.isAuthenticated).toHaveBeenCalled();
    expect(loginService.getUserRole).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/order']);
  });

  function createActivatedRouteSnapshot(): ActivatedRouteSnapshot {
    return {} as ActivatedRouteSnapshot;
  }

  function createRouterStateSnapshot(): RouterStateSnapshot {
    return {} as RouterStateSnapshot;
  }
});
