import { Component, OnInit } from '@angular/core';
import { Reservaciones } from '../interfaces/reservaciones.model';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.page.html',
  styleUrls: ['./reservaciones.page.scss'],
})
export class ReservacionesPage implements OnInit {

  reservaciones: Reservaciones[]=[];
  constructor(
    private reservacionesService: Reservaciones
  ) {}


   ionViewWillEnter(){
    this.reservaciones = this.reservacionesService.getAllReservaciones();
   }



  ngOnInit() {
    
    }
    
  }


