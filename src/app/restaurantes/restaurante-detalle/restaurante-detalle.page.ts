import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Button } from 'protractor';
import { Action } from 'rxjs/internal/scheduler/Action';
import { NuevaReservacionComponent } from 'src/app/reservaciones/nueva-reservacion/nueva-reservacion.component';
import { ReservacionService } from 'src/app/service/reservacion.service';
import { Restaurante } from '../../interfaces/restaurante.model';
import { RestauranteService } from '../../service/restaurante.service';

@Component({
  selector: 'app-restaurante-detalle',
  templateUrl: './restaurante-detalle.page.html',
  styleUrls: ['./restaurante-detalle.page.scss'],
})
export class RestauranteDetallePage implements OnInit {

  restaurantes: Restaurante;

  constructor(
    private activateRute:  ActivatedRoute,
    private restauranteService: RestauranteService,
    private router: Router,
    private alertCtr: AlertController,
    private actionCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private reservacionService: ReservacionService
  ) { }

  ngOnInit() {
    
    this.activateRute.paramMap.subscribe(paramM =>{
      const param: string = "restauranteId";
      if(!paramM.has(param)){
        return;
      }
      const restauranteid: number = +paramM.get(param);
      this.restaurantes = this.restauranteService.getRestaurante(restauranteid);
    });
  }
  onDelateRest(){
    this.alertCtr.create({
      header: 'Estas Seguro?',
      message: 'Realmente quieres borrar este restaurante?',
      buttons:[
        {text: 'Cancelar', role: 'cancel' },
        {text: 'Eliminar', handler: ()=> {
          this.restauranteService.delateRestaurante(this.restaurantes.id);
          this.router.navigate(["/restaurantes"]);
        }}

      ]
    }).then(alert => {
    alert.present();
  });

  }
  onReservarRestaurante(){
    this.actionCtrl.create( {header:"Seleccione accion",
    buttons: [
      {text:' Seleccionar Fecha', handler:()=>{
        console.log('select');
        this.openReservarModal('select');
      }},
      {text:' Hoy', handler:()=>{
        console.log('hoy');
        this.openReservarModal('hoy');
      }},
      {text:'Cancelar', role: 'cancel'},
    ] 
  }).then(el =>{
    el.present();
  });
   
    
   }

   openReservarModal(modo: 'select' |'hoy'){
     this.modalCtrl.create({
       component: NuevaReservacionComponent,
       componentProps: {restaurante: this.restaurantes, mode: modo}
     }).then( el =>{
       el.present();
       return el.onDidDismiss();
     }).then(result =>{
       if(result.role == 'confirm'){
         this.loadingCtrl.create({message: 'reservando....'})
         .then(loadingEl =>{
           loadingEl.present();

           console.log(result);

           this.reservacionService.addReservaciones(
             result.data.restaurante,
             result.data.horario
           );

           loadingEl.dismiss();
         });
       }
     });
   }

}
