import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Button } from 'protractor';
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
    private alertCtr: AlertController
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

}
