import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestauranteDetallePageRoutingModule } from './restaurante-detalle-routing.module';

import { RestauranteDetallePage } from './restaurante-detalle.page';
import { NuevaReservacionModule } from 'src/app/reservaciones/nueva-reservacion/nuevas-reservacion.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestauranteDetallePageRoutingModule,
    NuevaReservacionModule
  ],
  declarations: [RestauranteDetallePage]
})
export class RestauranteDetallePageModule {}
