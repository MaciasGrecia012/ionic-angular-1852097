import { Injectable } from '@angular/core';
import { Reservaciones } from '../interfaces/reservaciones.model';
import { Restaurante } from '../interfaces/restaurante.model';
import { RestauranteDetallePage } from '../restaurantes/restaurante-detalle/restaurante-detalle.page';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {
 private reservaciones: Reservaciones[] =[
   /*{id: 1, restauranteid: 1, restaurante: 'Cabo Gril', horario: 'Sabado 25 Diciembre - 9:00 pm', imgUrl: 'https://static.wixstatic.com/media/5e5c92_affdd3dd508a433c84fbf419644e3680.png/v1/fill/w_291,h_226,al_c,q_85,usm_0.66_1.00_0.01/5e5c92_affdd3dd508a433c84fbf419644e3680.webp'},
   {id: 2, restauranteid: 1, restaurante: 'Pipper Pizza', horario: 'Sabado 06 de Noviembre - 1:00 pm', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwdyCqGjw-S2byQjwx5CIoGJhfeEhFh5WIw&usqp=CAU' },
   {id: 3, restauranteid: 1, restaurante: 'Carls Jr', horario: 'Lunes 06 de Septiembre - 11:00 pm', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42KM_INslzKBpYmRYmaooUvjtlRsRWYVOZwr_paXHDkwYz99ghVErXmRnwHHfKvTD1g&usqp=CAU'},
   {id: 4, restauranteid: 1, restaurante: 'Cabo Gril', horario: 'Miercoles 27 de octubre - 8:00 pm', imgUrl: 'https://static.wixstatic.com/media/5e5c92_affdd3dd508a433c84fbf419644e3680.png/v1/fill/w_291,h_226,al_c,q_85,usm_0.66_1.00_0.01/5e5c92_affdd3dd508a433c84fbf419644e3680.webp'}*/
 ];
  constructor() { }
  getAllReservaciones(){
    return [...this.reservaciones];
  }
  addReservaciones(rest: Restaurante, horario: string ){
    this.reservaciones.push({
      id: this.reservaciones.length, 
        restauranteid: rest.id, 
        restaurante: rest.titulo, 
        horario,
        imgUrl: rest.ingUrl,
      });
  }


}
