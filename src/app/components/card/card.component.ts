import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']

})

export class CardComponent implements OnInit {

  @Input() url: String = ""
  @Input() description: String = ""
  @Input() name: String = ""
  @Input() type: String = ""

  constructor() { }

  ngOnInit(): void {

  }

}
