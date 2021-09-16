import { Injectable } from '@angular/core';
import { Restaurante } from './restaurante.model';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  
    private restaurantes: Restaurante[]=[
      {id: 1, titulo: "Little Cessar", platillos: ["Pizza", "Alitas"], ingUrl: "https://media-exp1.licdn.com/dms/image/C4E0BAQELl8IRHlkH7Q/company-logo_200_200/0/1530545745520?e=2159024400&v=beta&t=FayEFWyz_6NtsQwWycKJANTFrSkghPu8GGls0z2XdVY"},
      {id: 1, titulo: "PapaJoness", platillos: ["Tacos Mariscos", "TAcos de CArne asada"], ingUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUvGb3Hhk9HsB6nAvZnTX_uNO1jS985HwhwBPQ_n8q4GA0IVfZVzRwos544sh60hZOEs&usqp=CAU"},
      {id: 1, titulo: "Cavo Grill", platillos: ["Tacos", "MAriscos"], ingUrl: "https://static.wixstatic.com/media/5e5c92_affdd3dd508a433c84fbf419644e3680.png/v1/fill/w_291,h_226,al_c,q_85,usm_0.66_1.00_0.01/5e5c92_affdd3dd508a433c84fbf419644e3680.webp"   }
    ];

  constructor() { }

  getAllRestaurantes(){
    return [...this.restaurantes];
  }

  getRestaurante(restauranteid: number){
    return {...this.restaurantes.find(r => {
      return r.id === restauranteid;
    })};


  }

  delateRestaurante(restauranteid:number){
    this,this.restaurantes = this.restaurantes.filter(rest=>{
      return rest.id !== restauranteid;
      })
  }



}
