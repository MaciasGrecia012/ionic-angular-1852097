import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  CanLoad, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {
  constructor(
    private loginServece: LoginService,
    private router: Router
  ){}
  CanLoad(
    route: Route,
    segments: UrlSegment[]): Observable <boolean | UrlTree |Promise <boolean |UrlTree > | UrlTree{
      if(!this.loginServece.usuariologgeado){
        this.router.navigateByUrl("/login");
      }
      return this.loginServece.usuariologgeado;
    }
  }
  
}
