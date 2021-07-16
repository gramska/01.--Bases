import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable()
export class DbzService{

    // tslint:disable-next-line: variable-name
    private _personajes: Personaje[] = [{
        nombre: 'Goku',
        poder: 1200
      },
      {
        nombre: 'Vegeta',
        poder: 1000
      }];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor(){
        console.log('Servicio DbzService inicializado...');
    }

    agregarPersonaje(personaje: Personaje): void{
        this._personajes.push(personaje);
    }
}
