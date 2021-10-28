import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component,  OnInit, OnDestroy } from '@angular/core';
import {IonItemSliding, LoadingController } from '@ionic/angular';
import { create } from 'domain';
import {  Subscription } from 'rxjs';
import { Reservaciones} from '../interfaces/reservaciones.model';
import { ReservacionService } from '../service/reservacion.service';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.page.html',
  styleUrls: ['./reservaciones.page.scss'],
})
export class ReservacionesPage implements OnInit, OnDestroy {

  reservaciones: Reservaciones[];
  private reservacionesSub: Subscription;
  isLoading: false; 


  constructor(
    private reservacionesService:  ReservacionService,
    private loadingCtr: LoadingController
     
  ) {}
ngOnInit() {
    this.reservacionesSub= this.reservacionesService.reservaciones.subscribe(rsvs =>{
    this.reservaciones = rsvs;
    });
    }
    
  

   ionViewWillEnter(){
   console.log('IONIC -> ionViewWillEnter');
   this.isLoading = true;
   this.reservacionesService.fetchReservaciones().subcribe(rsvs => {
     this.reservaciones = rsvs;
     this.isLoading = false;
   });
   
  }
  ngOnDestroy(){
    if(this.reservacionesSub){
      this.reservacionesSub.unsubscribe();
    }
  }
 onRemoveReservacion( reservacionId: string, slidingEl: IonItemSliding){
   slidingEl.close();
   this.loadingCtr({
     message: 'eliminando reservacion.........'
   })
   .then(loadingEl =>{
     loadingEl.present();
     this.reservacionesService.removeReservaion(reservacionId).subcribe(()=> {
       loadingEl.dimiss();
     });
     });
   
 }
}

  


