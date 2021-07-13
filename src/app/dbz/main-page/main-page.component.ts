import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  personajes: Personaje[] = [{
    nombre: 'Goku',
    poder: 1200
  },
  {
    nombre: 'Vegeta',
    poder: 1000
  }];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  agregarPersonaje(nuevo: Personaje): void{
    this.personajes.push(this.nuevo);
  }
}
