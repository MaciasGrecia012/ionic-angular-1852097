import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usuarioLog = false;
  get usuariologgeado(){
    return this.usuarioLog;
  }

  constructor() { }
  login(){
    this.usuarioLog =true;
  }
  logout(){
    this.usuarioLog = false;

  }
}
