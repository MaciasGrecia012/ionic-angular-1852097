import { Injectable } from '@angular/core';
import { ofertas } from '../interfaces/oferta.model';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  ofertas: ofertas[]= [
    {id:1, titulo: 'hamburguesa a 1 peso', subtitulo: 'Disfruta con quien quieras', vigencia:'hasta agotar existencia', imagen: 'https://www.elcinco.mx/sites/default/files/2019-05/0e367afe-67a5-4381-a561-bd459e975baf.jpg' },
   {id:2, titulo: 'Mc Moffin', subtitulo: 'Disfruta con quien quieras', vigencia:'hasta agotar existencia', imagen: 'https://speisekarte.menu/storage/media/dishes_main/1853923/image.jpg'  },
   {id:3, titulo: 'Hamburguesa x 3 ', subtitulo: 'Disfruta con quien quieras', vigencia:'hasta agotar existencia', imagen: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-video-ad-for-facebook-cover-design-template-34555606d4b6776707b7d030464a861b_screen.jpg?ts=1579265039'},
   {id:4, titulo: 'Todo x5', subtitulo: 'Disfruta con quien quieras', vigencia:'hasta agotar existencia', imagen: 'https://i.ytimg.com/vi/Asc38QisEHg/maxresdefault.jpg'},
  ];


  constructor() { }
  getAllOfertas(){
    return [...this.ofertas];
  }
}
