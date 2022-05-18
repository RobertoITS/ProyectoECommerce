import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [
    {url: "https://cdn.pixabay.com/photo/2018/06/25/17/03/fashion-3497413_960_720.jpg", description: "Algo", name: "Ropa"},
    {url: "https://cdn.pixabay.com/photo/2018/06/25/17/01/fashion-3497406_960_720.jpg", description: "Algo", name: "Ropa"},
    {url: "https://cdn.pixabay.com/photo/2018/06/25/17/01/fashion-3497408_1280.jpg", description: "Algo", name: "Ropa"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
