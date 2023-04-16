import { Injectable } from '@angular/core';
import { AuthService } from './auth-service.service';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  // Check wherether a user has the required role to access a route
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const roles = route.data['roles'] as Array<string>;
    const userRole = this.authService.getUserRole();

    console.log(roles);   // for debugging
    console.log(userRole);// for debugging

    if (!this.authService.isLoggedIn() || !roles.includes(userRole)) {
      this.router.navigate(['/log-in']);
      return false;
    }

    return true;
  }
}
