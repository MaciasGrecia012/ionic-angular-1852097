import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private loginServe: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }
 onLogin(){
   this.loginServe.login();
   this.router.navigateByUrl('/restaurantes/tabs/descubri');
 }
}
