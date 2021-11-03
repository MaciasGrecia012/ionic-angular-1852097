import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import{BehaviorSubject, from, pipe} from 'rxjs';
import {map, tap} from  'rxjs/operators';
import {Usuario} from './usuario.model';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Plugins } from '@capacitor/core';


interface LoginResponseData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expresIn: string;
  localId: string;
  registered: boolean;


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
  
  signup(email:string, password: string){
    return this.http.post <LoginResponseData> (
      'https://identitytoolkit.googleapis.com/v1/acconst:sgnUp?key=$(environment.firebaseAPIKey }',
    { email: email, password: password, returnSecureToken: true}
      );
  }
  private setUserDate(userData: LoginResponseData){
    const expTime = new Date(new Date().getTime()+(+userData.expresIn*1000));
    this._usuario.next(new Usuario(userData.localId, userData.email, userData.idToken, expTime));
    
    this.storeAuthData(userData.localId, userData.email, userData.idToken, expTime.toISOString() );
  }

  private soreAuthData(userId: string, email: string, token: string, tokenExpirationDate: string){
    const data= JSON.stringify({
      userId: userId,
      email: email,
      token: token,
      tokenExpirationDate: tokenExpirationDate
    });
    Plugins.Storage.set({key: 'authData', value: data});
    

  }
  autoLogin(){
    return from(Plugins.Storage.get({key: 'authData'}).pipe(map(storedData=>{
      if(!storedData || !storedData.value){
        return null;
      }
      const parsedData= JSON.parse(storedData.value) as{
        userId: string,
        email: string,
        token: string,
        tokenExpirationDate: string
      }
      const expTime = new Date(parsedData.tokenExpirationDate);
      if(expTime <= new Date() ){
        return null;
      }
      const user= new Usuario(parsedData.userId, parsedData.email, parsedData.token, expTime);

      return user;
    }),
    tap(user =>{
      if(user){
        this.usuario.next(user);
      }
    }),
    map( user =>{
      return !!user;
    })
    )
    );
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

logout(){
    this._usuario.next(null);
    Plugins.Storage.remove({key: 'authData'});

  }

}


