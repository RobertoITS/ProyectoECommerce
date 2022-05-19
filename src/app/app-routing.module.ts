import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  //Esta pagina seria un reciclado, se muestran todos los productos, o
  //productos especificados por el type
  {path: "allProducts/:type", component: AllProductsComponent},
  //Creamos parametros que se pasan de un componente a otro en el routing.
  //Despues los instanciamos en el que los envia y recibe:
  {path: "product/:url/:name/:description/:type", component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
