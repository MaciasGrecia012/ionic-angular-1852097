import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Restaurante } from 'src/app/interfaces/restaurante.model';
import { __importDefault } from 'tslib';
import { Utilities} from 'src/app/utilities';

@Component({
  selector: 'app-nueva-reservacion',
  templateUrl: './nueva-reservacion.component.html',
  styleUrls: ['./nueva-reservacion.component.scss'],
  providers: [DatePipe]
})
export class NuevaReservacionComponent implements OnInit {

  @Input() restaurante: Restaurante;
  @Input() mode: [DatePipe]
  fecha: string;
  desdeMin: string;

  @ViewChild('fromVew' ) myFrom: NgForm;


  constructor(
    private modalUrl: ModalController,
    private util: Utilities
  ) { }

  ngOnInit() {
    const hoy = new Date();
    this.desdeMin = hoy.toISOString();
    if(this.mode =='hoy'){
      this.fecha = hoy.toISOString();
    }
  }
  
  onReservar(){
    this.modalUrl.dismiss({
      restaurante: this.restaurante,
      horario: new Date(this.myFrom.value["horario"].toDateString())
    }, 'confirm');
  }

  onCanselar(){
    this.modalUrl.dismiss(null, 'cancel');
  }

}
