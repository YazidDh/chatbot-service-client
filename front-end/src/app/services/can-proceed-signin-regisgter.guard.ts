import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanProceedService } from './can-proceed.service';

@Injectable({
  providedIn: 'root'
})
export class CanProceedSigninRegisgterGuard implements CanActivate {
  constructor(private canProceedService:CanProceedService, private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.canProceedService.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['/dashboard']);
        return false;
      }  }
  
}
