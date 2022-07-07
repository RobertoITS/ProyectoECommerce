import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ComponentsModule } from '../components/components.module';
import { FooterComponent } from './footer/footer.component';
import { FloatbuttonComponent } from './floatbutton/floatbutton.component';
import { AppRoutingModule } from '../app-routing.module';
import { ScrollTopButtonComponent } from './scroll-top-button/scroll-top-button.component';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FloatbuttonComponent,
    ScrollTopButtonComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    MatInputModule
  ], exports: [
    NavbarComponent,
    FooterComponent,
    FloatbuttonComponent,
    ScrollTopButtonComponent
  ]
})
export class SharedModule { }
