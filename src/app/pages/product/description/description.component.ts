import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() name: String = ""
  @Input() description: String = ""
  selectedColor = "#FFFFFF"
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
  //Instanciamos el escuchador del link
  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //Cada vez que se active, actualiza los datos
    this._activatedRoute.paramMap.subscribe(()=>
      this.selectedColor = "#FFFFFF"
    )
  }

}
