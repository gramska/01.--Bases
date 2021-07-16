
import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

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

  // @Output()
  // onPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzServide: DbzService){}
  agregar(): void{

    if ( this.nuevo.nombre.trim().length === 0 ){
      return;
    }

    this.dbzServide.agregarPersonaje(this.nuevo);
    // this.onPersonaje.emit(this.nuevo);  //Emite el valor como accion...

    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }
}
