import { Component, OnInit } from '@angular/core';
import { Products } from './Products';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']

})

export class CardComponent implements OnInit {

  pr: Products[] = []

  constructor() {
    this.pr.push({u_r_l:"https://cdn.pixabay.com/photo/2018/06/25/17/03/fashion-3497413_960_720.jpg"},
    {u_r_l:"https://cdn.pixabay.com/photo/2018/06/25/17/01/fashion-3497406_960_720.jpg"},
    {u_r_l:"https://cdn.pixabay.com/photo/2018/06/25/17/01/fashion-3497408_1280.jpg"})
   }

  ngOnInit(): void {

  }

}
