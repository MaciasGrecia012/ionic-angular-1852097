import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  CanLoad, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
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
      return this.loginServece.usuariologgeado.pipe(
        take(1),
        switchMap(isAuth =>{
         if(!isAuth){
           return this.loginServece.autoLogin();
         }
         else{
           return of(isAuth);
         }
        }),
        tap(isAuth =>{
          console.log(this.loginServece.usuariologgeado);
          if(!this.loginServece.usuariologgeado){
            this.router.navigateByUrl('/login');
          }
        })
      );
      }
      
    }

  

