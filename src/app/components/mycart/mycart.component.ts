import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  cart: Product[] = []

  //Obtenemos la lista guardada en local
  get(){
    this.cart = this.getCart()
  }


  getCart(): Product[]{
    return JSON.parse(localStorage.getItem('cart')!)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
