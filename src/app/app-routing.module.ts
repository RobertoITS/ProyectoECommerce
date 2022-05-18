import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "allProducts", component: AllProductsComponent},
  //Creamos parametros que se pasan de un componente a otro en el routing.
  //Despues los instanciamos en el que los envia y recibe:
  {path: "product/:url/:name/:description", component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
