import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  //Obtenemos la lista guardada en local
  storageList: Product[] = JSON.parse(localStorage.getItem('list')!)

  title: String = "Todos"

  all: String = "Todos"

  type: String = ""

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //Actualizamos los valores con un observador, para que se actualicen
    //si la pagina recibe nuevos valores:
    this._activatedRoute.paramMap.subscribe((params: ParamMap)=>
      this.title = params.get('type')!
    )
    this.type = this.title
  }
}
