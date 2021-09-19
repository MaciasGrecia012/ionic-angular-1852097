import { Component, OnDestroy, OnInit } from '@angular/core';
import { Console } from 'console';
import { Restaurante } from './restaurante.model';
import { RestauranteService } from './restaurante.service';
import { RestaurantesPageRoutingModule } from './restaurantes-routing.module';
import { RestaurantesPageModule } from './restaurantes.module';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {
  restaurantes: Restaurante[];

  
    constructor() {}
    
    ngOnInit(){
      console.warn('ngOnInit');
    }

  

}
