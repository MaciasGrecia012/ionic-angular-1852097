import { Component, OnDestroy, OnInit } from '@angular/core';
import { Restaurante } from '../../interfaces/restaurante.model';
import { RestauranteService } from '../../service/restaurante.service';
import { Subscriber, Subscription } from 'rxjs';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-descubrir',
  templateUrl: './descubrir.page.html',
  styleUrls: ['./descubrir.page.scss'],
})
export class DescubrirPage implements OnInit, OnDestroy {

  restaurantes: Restaurante[];
  restaurantesSub: Subscription;
  isLoading = false;

  
    constructor(
      private restauranteService: RestauranteService,
      private menuCtrl: MenuController
      ) {}
 ngOnInit(){
   console.log('ANGULAR -> ngOnInit');

   this.restaurantesSub = this.restauranteService.restaurantes.subscribe(rest =>{
     this.restaurantes= rest;
   })

 }
  ionViewWillEnter(){
   console.log('IONIC -> ionViewWilEnter');
   this.isLoading= true;
   this.restaurantesSub = this.restauranteService.fetchRestaurantes().subscribe(()=>{
     this.isLoading= false;
   });
  }

   ionViewDidEnter(){
     console.log('IONIC-> ionViewDidEnter');
   }

   ionViewWillLeave(){
     console.log('IONIC -> ionViewWillLeave');
   }

   ionViewDidLeave(){
     console.log('ANGULAR -> ionViewDidLeave');
   }
  
   ngOnDestroy(){
   console.log('ANGULAR -> ngOnDestroy');
   if(this.restaurantesSub){
     this.restaurantesSub.unsubscribe();
   }
   }

   openSideMenu(){
     this.menuCtrl.open();
   }

  /*ngOnInit() {
    console.warn('ngOnInit');
    
 }*/
  /*ionVewWillEnter(){
  console.log('ionVewWillEnter');
  this.restaurantes = this.restauranteService.getAllRestaurantes();
  }

  ionVewDidEnter(){
    console.log('ionVewDidEnter');
  }

  ionVewWillLeve(){
    console.log('ionVewWillLeve');
  }

  ionVewDidLeave(){
    console.log('ionVewDidLeave');
  }

  ngOnDestroy(){
    console.warn('ngOnDestoy');
  }*/



}
