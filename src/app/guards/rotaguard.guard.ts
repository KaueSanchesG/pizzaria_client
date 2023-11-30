// rotaguard.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from '../services/auth/login.service';

@Injectable({
  providedIn: 'root',
})
export class RotaguardGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Verificar se há um usuário autenticado
    if (!this.loginService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }

    // Verificar se o usuário tem a role 'USER' (ou a role que você deseja bloquear)
    if (this.loginService.getUserRole() === 'USER') {
      this.router.navigate(['/order']); // Redirecionar para uma página de sem permissão
      return false;
    }

    return true;
  }
}
