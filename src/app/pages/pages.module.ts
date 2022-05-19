import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';
import { DescriptionComponent } from './product/description/description.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductComponent,
    HomeComponent,
    AllProductsComponent,
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    AllProductsComponent,
    ProductComponent,
    DescriptionComponent
  ]
})
export class PagesModule { }
