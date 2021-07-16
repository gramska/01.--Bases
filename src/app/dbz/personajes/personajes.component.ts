import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  constructor(private dbzService: DbzService){

  }

  // @Input()
  // personajes: Personaje[] = [];

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }
}
