import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ComponentsModule } from '../components/components.module';
import { FooterComponent } from './footer/footer.component';
import { FloatbuttonComponent } from './floatbutton/floatbutton.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FloatbuttonComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule
  ], exports: [
    NavbarComponent,
    FooterComponent,
    FloatbuttonComponent
  ]
})
export class SharedModule { }
