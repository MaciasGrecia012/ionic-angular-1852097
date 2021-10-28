import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservacionesPageRoutingModule } from './reservaciones-routing.module';

import { ReservacionesPage } from './reservaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservacionesPageRoutingModule
  ],
  declarations: [ReservacionesPage]
})
export class ReservacionesPageModule {}

export class reservaciones{
  constructor(
public id: string,
public restauranteId: string,
public restaurante: string,
public nombre: string,
public horario: string,
public imgUrl: string,
public usuarioId: string,
  ){}
}
