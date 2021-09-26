import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Restaurante } from 'src/app/interfaces/restaurante.model';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-nueva-reservacion',
  templateUrl: './nueva-reservacion.component.html',
  styleUrls: ['./nueva-reservacion.component.scss'],
})
export class NuevaReservacionComponent implements OnInit {

  @Input() restaurante: Restaurante;

  @ViewChild('fromVew' ) myFrom: NgForm;

  fecha: any;

  constructor(
    private modalUrl: ModalController
  ) { }

  ngOnInit() {}
  
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
