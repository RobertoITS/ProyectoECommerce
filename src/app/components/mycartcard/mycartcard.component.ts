import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycartcard',
  templateUrl: './mycartcard.component.html',
  styleUrls: ['./mycartcard.component.css']
})
export class MycartcardComponent implements OnInit {
  @Input() name: String = ""
  @Input() description: String = ""
  @Input() price: number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
