import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NuevaReservacionComponent } from "./nueva-reservacion.component";


@NgModule({
    declarations: [NuevaReservacionComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule

    ],
    exports: [NuevaReservacionComponent]
})


export class NuevaReservacionModule{}