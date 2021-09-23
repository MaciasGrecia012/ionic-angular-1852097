import { Component, OnDestroy, OnInit } from '@angular/core';
import { Console } from 'console';
import { Restaurante } from '../interfaces/restaurante.model';
import { RestauranteService } from '../service/restaurante.service';
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
