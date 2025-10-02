import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'juegos-home',
  standalone: true,
  templateUrl: './home-juegos.component.html',
})
export class JuegosHomeComponent {
  constructor(private router: Router) { }
  navegarA(ruta: string) {
    this.router.navigate([ruta]);
  }
}