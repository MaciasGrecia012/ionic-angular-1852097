import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLoading = false;
  isLoadingMode= true;

  constructor(
    private loginServe: LoginService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }
 onLogin(){
   this.isLoading = true;
   this.loginServe.login();

   this.loadingCtrl.create({
     keyboardClose: true,
     message: 'Validando....'
   }).then(loadingEl => {
     loadingEl.present();

     setTimeout(()=>{
       this.isLoading =false;
       loadingEl.dismiss();
       this.router.navigateByUrl('/restaurantes/tabs/descuentos');
     }, 2000);
   });
  
 }
 onSubmit (from: NgForm){
   if(!from.valid){
     return false;
   }
   const email= from.value.email;
   const pass = from.value.pass;

   if(this.isLoadingMode){

   }
   else{

   }

 }
 onSwitchAuthMode(){
   this.isLoadingMode = !this.isLoadingMode;
 }
}
