import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Iroman', 'Hulk', 'Spiderman', 'Thor', 'Capitan América'];
  heroeBorrado = '';

  borrarHeroe(): void{
    // this.heroes.splice(0,1);

    // this.heroeBorrado = this.heroes.splice(this.heroes.length - 1)[0];

    this.heroeBorrado = this.heroes.shift() || '';
  }
}
