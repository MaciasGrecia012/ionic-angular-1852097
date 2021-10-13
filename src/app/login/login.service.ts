import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import{BehaviorSubject, pipe} from 'rxjs';
import {map, tap} from  'rxjs/operators';
import {Usuario} from './usuario.model';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';


interface LoginResponseData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expresIn: string;
  localId: string;
  registered?: boolean;


}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  [x: string]: any;
  private usuarioLog = false;


  get usuariologgeado(){
    return this.usuarioLog;
  }

  

  constructor(
    private http: HttpClient
  ) { }

 /* login(){
    this.usuarioLog =true;
  }*/
  logout(){
    this.usuarioLog = false;

  }
  signup(email:string, password: string){
    return this.http.post <LoginResponseData> (
      'https://identitytoolkit.googleapis.com/v1/acconst:sgnUp?key=$(environment.firebaseAPIKey }',
    { email: email, password: password, returnSecureToken: true}
      );
  }
  private setUserDate(userData: LoginResponseData){
    const expTime = new Date(new Date().getTime()+(+userData.expresIn*1000));
    this._usuario.next(new Usuario(userData.localId, userData.email, userData.idToken, expTime));
  }
  login(email: string, password: string){
    return this.http.post <LoginResponseData> (
      'https://identitytoolkit.googleapis.com/v1/acconst:sgnUp?key=$(environment.firebaseAPIKey }',
    { email: email, password: password, returnSecureToken: true}
      );
  }
 
get usuarioId(){
  return this._usuario.asObservable(),pipe(map(user=>{
    if(user){
      return user.id;
    }
    else{
      return null;
    }
  }));
}

}
