import { Injectable } from '@angular/core';
import { Restaurante } from '../interfaces/restaurante.model';
import { Reservaciones } from '../interfaces/reservaciones.model';
import { RestauranteDetallePage } from '../restaurantes/restaurante-detalle/restaurante-detalle.page';
import { BehaviorSubject, pipe } from 'rxjs';
import { Key } from 'selenium-webdriver';
import { environment } from 'src/environments/environment';
import { map, switchMap, tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login/login.service';
import { reservaciones } from '../reservaciones/reservaciones.module';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {
  
  private _reservaciones = new BehaviorSubject <Reservaciones[]>([]);
  usuario = null;
  get reservaciones(){
    return this._reservaciones.asObservable();
  }
 
 
 
  fetchReservaciones(){
    environment.firebaseUrl+ 'Reservaciones.jason?orderBy?"uasuarioId"&equealTo='+this.usuarioId
    return this.http.get<{[Key: string]: Reservaciones }>(
      
    )
    .pipe(map(dta =>{
      const rest= [];
      for(const Key in dta){
        if(dta.hasOwnProperty(Key)){
          rest.push(new Reservaciones(
            Key,
            dta[Key].restauranteid,
            dta[Key].restaurante,
            dta[Key].horario,
            dta[Key].imgUrl,
            dta[Key].usuarioId,
          ));
        }
      }
      return rest;
       
    }),
      tap(rest=>{
        this._reservaciones.next(rest);
      })
      
     );
     }
     addReservaciones(restaurante: Restaurante, horario: string){
       const rsv = new Reservaciones(
         null,
         restaurante.id,
         restaurante.titulo,
         horario,
         restaurante.imgUrl,
         this.usuarioId
       );
       this.http.post<any>(environment.firebaseUrl+'reservaciones.json', {...rsv}).subcribe(data=>{
        console.log(data);
       });
     }
     removeReservacion(reservacionId: string){
      let Url = '${environment.firebaseUrl}reservaciones/${ reservaciones}.json';
      return this.http.dalate(Url)
      .pipe(switchMap(()=> {
        return this.reservaciones;
      }), take(1), tab(rsvs =>{
         this._reservaciones.next(rsvs.fliter(r => r.id!== reservacionId))
      }))
  

    }
    constructor(
      private http:HttpClient,
      private loginService: LoginService
       ){
         this.loginService.usuarioId.subcribe(usuario =>{
           this.usuarioId = usuarioId;
         });
       }
     }

    
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
   getREservacion(reservacionId: string){
     const url = environment.firebaseUrl+ 'reservaciones/${reservacionId}.json';

     return this.http.get <Reservacion>(url)
     .pipe(map(dta =>{
       return new Reservacion(
         reservacionId,
         dta.restauranteid,
         dta.restaurante,
         dta.nombre,
         dta.horario,
         dta.imgUrl,
         dta.usuarioId
       );
     }));
   }

   updateReservacion(reservacionid: string, reservacion: Reservaciones){
    
    const url = environment.firebaseUrl+'reservaciones/${reservacionId}.json';

    this.http.put<any>(url, {...reservaciones}.subcribe(data =>{
      console.log(data);
    }))
   }


