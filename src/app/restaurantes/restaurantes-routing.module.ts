import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantesPage } from './restaurantes.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantesPage
  },
  {
    path: ':restauranteid',
    loadChildren: () => import('./restaurante-detalle/restaurante-detalle.module').then( m => m.RestauranteDetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantesPageRoutingModule {}
