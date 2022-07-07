import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { TittleComponent } from './tittle/tittle.component';
import { CardComponent } from './card/card.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AppRoutingModule } from '../app-routing.module';
import { MycartComponent } from './mycart/mycart.component';
import { MycartcardComponent } from './mycartcard/mycartcard.component';
import {MatInputModule} from '@angular/material/input';
import { NgModel } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    CarrouselComponent,
    TittleComponent,
    CardComponent,
    OffcanvasComponent,
    AccordionComponent,
    MycartComponent,
    MycartcardComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatInputModule,
    MatDialogModule
  ], exports: [
    CarrouselComponent,
    TittleComponent,
    CardComponent,
    OffcanvasComponent,
    MycartComponent,
    MycartcardComponent
  ]
})
export class ComponentsModule { }
