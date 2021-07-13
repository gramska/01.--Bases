
import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(): void{

    if ( this.nuevo.nombre.trim().length === 0 ){
      return;
    }

    this.onPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }
}
