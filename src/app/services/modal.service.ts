import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private styleTag: HTMLStyleElement;


  constructor() {
    this.styleTag = this.createTag();
   }
  
  show(): void {
    document.body.removeChild(this.styleTag)
  }

  hide(): void {
    document.body.appendChild(this.styleTag)
  }

  createTag = () => {
    let style = document.createElement( "style" );

    style.type = 'text/css';
    style.setAttribute('data-debug', 'Injected');
    style.textContent = `
      body {
        overflow: hidden !important ;
      }
    `;
    return(style)
  }
}
