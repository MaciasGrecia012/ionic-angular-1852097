import { Component, OnDestroy, OnInit } from '@angular/core';
import { Restaurante } from './restaurante.model';
import { RestauranteService } from './restaurante.service';
import { RestaurantesPageRoutingModule } from './restaurantes-routing.module';
import { RestaurantesPageModule } from './restaurantes.module';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit, OnDestroy {
  restaurantes: Restaurante[];

  
    constructor(private restauranteService: RestauranteService) {}

  ngOnInit() {
    console.warn('ngOnInit');
    
 }
  ionVewWillEnter(){
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
  }

}
