import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private tokenService:TokenService,
    private toast: ToastrService,
    private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> {

    if (this.tokenService.isUserAdmin()) {
      return true;
    } else {
      this.toast.error("Vous ne pouvez pas accéder à cette page.");
      return this.router.parseUrl('');
    }
  }
}


