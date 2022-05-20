import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //Esta variable sirve para mostrar el apartado de productos
  all: String = "Todos"

  constructor() { }

  ngOnInit(): void {
  }

}
