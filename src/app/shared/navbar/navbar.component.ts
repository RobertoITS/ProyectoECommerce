import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //Estos son los valores que le pasamos al product page
  all: String = "Todos"
  dress: String = "Vestido"
  pants: String = "Pantalon"
  constructor() {

   }

  ngOnInit(): void {
  }

}
