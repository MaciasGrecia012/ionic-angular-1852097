import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantesPageRoutingModule } from './restaurantes-routing.module';

import { RestaurantesPage } from './restaurantes.page';
import { NuevaReservacionComponent } from '../reservaciones/nueva-reservacion/nueva-reservacion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantesPageRoutingModule
  ],
  declarations: [RestaurantesPage, NuevaReservacionComponent ]
})
export class RestaurantesPageModule {}
