import { Component, OnInit } from '@angular/core';
import { ofertas } from 'src/app/interfaces/oferta.model';
import { OfertasService } from 'src/app/service/ofertas.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {
 ofertas: ofertas[]=[];


  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertas= this.ofertaService.getAllOfertas();
  }

}
