import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() name: String = ""
  @Input() description: String = ""
  selectedColor = [{hex: '', name:'', value: 0}]
  colors = [
    {
      hex: '#00759A',
      name: 'Blue',
    },
    {
      hex: '#F7941D',
      name: 'Orange',
    },
    {
      hex: '#A71930',
      name: 'Red',

    },
    {
      hex: '#679146',
      name: 'Green',

    }
  ]
  constructor() {

  }

  ngOnInit(): void {}

  selectColor(){

  }
}
