import { Component, OnDestroy, OnInit } from '@angular/core';
import { Restaurante } from '../restaurante.model';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-descubrir',
  templateUrl: './descubrir.page.html',
  styleUrls: ['./descubrir.page.scss'],
})
export class DescubrirPage implements OnInit, OnDestroy {

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
