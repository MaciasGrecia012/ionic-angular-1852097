import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { create } from 'domain';
import { Button } from 'protractor';
import { Subscription } from 'rxjs';
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
  restauranteSub: Subscription;
  isLoading = false;

  constructor(
    private activateRute:  ActivatedRoute,
    private restauranteService: RestauranteService,
    private router: Router,
    private alertCtr: AlertController,
    private actionCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private reservacionService: ReservacionService,
    private navCtrl: NavController
  ) { }
    

  ngOnInit(){
    this.activateRute.paramMap.subscribe(paramM => {
      const param:string = 'restauranteId';
      if(!paramM.has(param)){
        this.navCtrl.navigateBack('restaurantes/tabs/descubrir');
        return;
      }
      const restauranteId: string = paramM.get(param);

      this.isLoading = true;

      this.restauranteSub = this.restauranteService.getRestaurante(restauranteId).subscribe(rest => {
        this.restaurantes = rest;
        console.log(rest);
        this.isLoading = false;
      }, error =>{
        this.alertCtr.create({
          header: 'Error',
          message: 'Error al obtener el restaurante!',
          buttons: [
            {
              text: 'Ok', handler:() =>{
                this.router.navigate(['restaurantes/tabs/descubrir']);

              }
          }
        ]
        }).then(alertEl =>{
          alertEl.present();
        });
      }
      );
    });
  }
  onDelateRestaurante(){
    this.alertCtr.create({
      header: 'Estas seguro?',
      message: 'Realmente deseas eliminarlo?',
      buttons:[
        {text:'Cancelar', role: 'cancel'},
        {text: 'Si', handler: ()=>{
          this.router.navigate(['/restaurantes', 'tabs', 'descubru']);
        }}
      ]
    }).then(alert=> {
      alert.present();
    });
  }


  onReservacionesRestaurante(){
    this.actionCtrl.create({
      header: 'Selecciona accion',
      buttons: [
        {text: 'Seleccionar Fecha', handler: () =>{
        this.openReservarModal('select');
        }},
       { text: 'hoy', handler: ()=>{
        this.openReservarModal('select');
       }},
       {text: 'Cancel', role: 'cancel'}
      ]
    })
    .then(actionSheet =>{
      actionSheet.present();
    });
  }

  openReservarModal(modo: 'select' | 'hoy'){
    this.modalCtrl.create({
      component: NuevaReservacionComponent,
      componentProps: {restaurante: this.restaurantes, mode: modo}
    })
    .then(modalEl =>{
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData =>{
      if(resultData === 'confirm'){
        this.loadingCtrl.create({message: 'reservado...'})
        .then(loadingEl =>{
          loadingEl.present();
          console.log(resultData);
          this.reservacionService.addReservaciones(resultData.data.restaurante, resultData.data.horario)
          loadingEl.dismiss();
        });
      }
    });
    console.log(modo);
  }

  /*ngOnInit() {
    
    this.activateRute.paramMap.subscribe(paramM =>{
      const param: string = "restauranteId";
      if(!paramM.has(param)){
        return;
      }
      const restauranteid: string = +paramM.get(param);
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
   }*/

}
