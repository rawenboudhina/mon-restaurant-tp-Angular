import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlatGuard implements CanActivate {

  constructor (private authService: AuthService,
    private router : Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (this.authService.isAdmin()||this.authService.isAgent())
      return true;
    else {
      this.router.navigate(['forbidden']);
      return false;
    }
  }

}
