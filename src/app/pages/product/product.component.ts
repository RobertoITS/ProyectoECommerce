import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  url: String = ""
  name: String = "Prueba";
  description: String = "Prueba";

  constructor(private _activatedRoute: ActivatedRoute) {
    //Mostramo en consola
    console.log(this._activatedRoute.snapshot.paramMap.get("url"))
  }

  ngOnInit(): void {
    //Obtenemos los parametros que se pasaron de un componente a otro
    this.url = this._activatedRoute.snapshot.paramMap.get("url")!
    this.name = this._activatedRoute.snapshot.paramMap.get("name")!
    this.description = this._activatedRoute.snapshot.paramMap.get("description")!
  }

}
