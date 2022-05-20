import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoECommerce';

  //Esta funcion hace un scroll top
  onActivate(event: Event) {
    window.scroll(0,0);
  }
}
