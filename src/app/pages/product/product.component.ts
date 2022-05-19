import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  url: String = ""
  name: String = "Prueba";
  description: String = "Prueba";
  type: String = ""

  //Obtenemos la lista guardada en local
  storageList: Product[] = JSON.parse(localStorage.getItem('list')!)

  constructor(private _activatedRoute: ActivatedRoute) {
    //Mostramo en consola
    console.log(this._activatedRoute.snapshot.paramMap.get("url"))
  }

  ngOnInit(): void {
    //Obtenemos los parametros que se pasaron de un componente a otro
    this._activatedRoute.paramMap.subscribe((params: ParamMap)=>
      this.url = params.get('url')!
    )
    this._activatedRoute.paramMap.subscribe((params: ParamMap)=>
      this.name = params.get('name')!
    )
    this._activatedRoute.paramMap.subscribe((params: ParamMap)=>
      this.description = params.get('description')!
    )
    this._activatedRoute.paramMap.subscribe((params: ParamMap)=>
      this.type = params.get('type')!
    )
  }

}
