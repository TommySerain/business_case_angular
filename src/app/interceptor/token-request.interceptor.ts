import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class TokenRequestInterceptor implements HttpInterceptor {
  

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.getToken();
    if (token !== null) {
      let requestClone = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
      this.tokenService.setIsLogged(true);
      return next.handle(requestClone);
    }
    return next.handle(request);
  }
}

export const TokenRequestInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenRequestInterceptor,
  multi: true,
};