import { Injectable } from '@angular/core';
import { Restaurante } from '../interfaces/restaurante.model';
import { Reservaciones } from '../interfaces/reservaciones.model';
import { RestauranteDetallePage } from '../restaurantes/restaurante-detalle/restaurante-detalle.page';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {
 private reservaciones: Reservaciones[] =[
   {id: "", restauranteid: '2' , restaurante: 'Cabo Gril', horario: 'Sabado 25 Diciembre - 9:00 pm', imgUrl: 'https://static.wixstatic.com/media/5e5c92_affdd3dd508a433c84fbf419644e3680.png/v1/fill/w_291,h_226,al_c,q_85,usm_0.66_1.00_0.01/5e5c92_affdd3dd508a433c84fbf419644e3680.webp'},
   {id: "", restauranteid: '1', restaurante: 'Pipper Pizza', horario: 'Sabado 06 de Noviembre - 1:00 pm', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwdyCqGjw-S2byQjwx5CIoGJhfeEhFh5WIw&usqp=CAU' },
 ];

  getAllReservaciones(){
    return [...this.reservaciones];
  }
  addReservaciones(rest: Restaurante, horario: string ){
    this.reservaciones.push({
      id: this.reservaciones.length-1, 
        restauranteid: rest.id, 
        restaurante: rest.titulo, 
        horario,
        imgUrl: rest.ingUrl,
      });
  }
    constructor() { }

}
