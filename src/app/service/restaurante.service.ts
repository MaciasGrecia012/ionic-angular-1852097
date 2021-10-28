import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Restaurante } from '../interfaces/restaurante.model';
import { BehaviorSubject } from 'rxjs';
import {map, retry, tap} from 'rxjs/operators';
import { Key } from 'readline';
import { Key, Key } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

    constructor(private http: HttpClient){}

    private _restaurantes= new BehaviorSubject  <Restaurante[]> ([]);
    get restaurantes(){
      return this._restaurantes.asObservable();

    }
    addRestaurante(restaurante: Restaurante){
     this.http.post<any>(
       environment.firebaseUrl + 'restaruantes.jason', {...restaurante}
       ).subscribe(data=> {
       console.log(data);
     })
    }
    fetchRestaurantes(){
      return this.http.get <{[Key: string]: Restaurante}>(
        environment.firebaseUrl + 'restaurantes.json'
      )
      .pipe(map(dta =>{
        const rest= [];
        for(const Key in dta){
          if (dta.hasOwnProperty(Key)){
            rest.push(
              new Restaurante( Key, dta[Key].titulo, dta[Key].imgUrl, dta[Key].platillos
                ));
          }
        }
        return rest;
          }),
          tap(rest => {
          this._restaurantes.next(rest);
          }));
    }
  
  getAllRestaurantes(){
    this.addRestaurante(this.restaurantes[0]);
    this.addRestaurante(this.restaurantes[1]);
    this.addRestaurante(this.restaurantes[2]);
    return[...this.restaurantes];
  }
  
  getRestaurante(restauranteid: string){
    const url = environment.firebaseUrl + 'restaurantes/$(restauranteId).jason';
    return this.http.get <Restaurante> (url)
    .pipe(map (dta =>{
      return new Restaurante( restauranteid, dta.titulo, dta.imgUrl, dta.platillos);

    }));
    
    }



  delateRestaurante(restauranteid:string){
    this.restaurantes = this.restaurantes.filter(rest=>{
      return rest.id !== restauranteid;
      })
  }



}
