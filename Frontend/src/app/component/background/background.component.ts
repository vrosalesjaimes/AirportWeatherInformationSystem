import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements AfterViewInit {

  images: string[] = [
    'assets/background/1.webp',
    'assets/background/2.webp',
    'assets/background/3.webp',
    'assets/background/4.webp',
    'assets/background/5.webp',
    'assets/background/6.webp',
    'assets/background/7.webp',
    'assets/background/9.webp',
    'assets/background/10.webp',
    'assets/background/8.webp',
  ]

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    let indice = 0;
    const bodyElement = document.body;
    const imagePreload = new Image();

    setInterval(() => {

      setTimeout(() => {
        indice = (indice + 1) % this.images.length;
        imagePreload.onload = () => {
          bodyElement.style.backgroundImage = `url(${imagePreload.src})`;
          bodyElement.classList.remove('fade-out'); // Elimina la clase CSS para mostrar la nueva imagen
        };
        imagePreload.src = this.images[indice];
      }, 100); // Espera 500ms antes de cambiar a la siguiente imagen
    }, 7000); // Cambia la imagen cada 5 segundos (ajusta el intervalo según tus necesidades)
  }

}
