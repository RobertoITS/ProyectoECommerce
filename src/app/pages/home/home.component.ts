import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Creamos la lista principal de productos:
  products: Product[] = [
    {url: "https://cdn.pixabay.com/photo/2018/06/25/17/03/fashion-3497413_960_720.jpg", description: "Pantalon de lana. Indumentaria invierno. Varios colores", name: "Pantalon de lana", type: "Pantalon"},
    {url: "https://cdn.pixabay.com/photo/2018/06/25/17/01/fashion-3497406_960_720.jpg", description: "Vestido de algodon. Indumentaria de fiesta. Varios colores", name: "Vestidos de gala", type: "Vestido"},
    {url: "https://cdn.pixabay.com/photo/2018/06/25/17/01/fashion-3497408_1280.jpg", description: "Vestido casual. Indumentaria primavera. Varios colores", name: "Vestidos casuales", type: "Vestido"}
  ]

  constructor() { }

  ngOnInit(): void {
    //Guardamos la lista en el localstorage de la pagina
    localStorage.setItem('list', JSON.stringify(this.products))
  }

}
