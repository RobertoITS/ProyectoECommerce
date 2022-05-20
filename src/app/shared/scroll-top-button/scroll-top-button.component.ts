import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll-top-button',
  templateUrl: './scroll-top-button.component.html',
  styleUrls: ['./scroll-top-button.component.css']
})
export class ScrollTopButtonComponent implements OnInit {

  windowScrolled: Boolean = false

  constructor(@Inject(DOCUMENT) private document: Document) { }
  //Un listener del scroll
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
        //Se muestra o no el boton
          this.windowScrolled = true;
      }
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
  scrollToTop() {
    //Esta funcion hace un scroll lento
    //(function smoothscroll() {
      //  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        //if (currentScroll > 0) {
          //  window.requestAnimationFrame(smoothscroll);
            //window.scrollTo(0, currentScroll - (currentScroll / 8));
        //}
    //})();
    //El scroll a la posicion 0,0, arriba del todo
    window.scroll(0,0)
}
  ngOnInit(): void {

  }



}
