import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( 
    private loginServece: LoginService,
    private router: Router
    ) {}
onLogout(){
 this.loginServece.logout();
 this.router.navigateByUrl('/login')
}

}

