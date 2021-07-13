import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{texto}}</h1>

        <button (click)="acumular(1, true)">+</button>
        <span>Acumulador {{ acumulador }}</span>
        <button (click)="acumular(-1, true)">-</button>
        <hr>
        <button (click)="acumular(acumulador, false)">+{{ acumulador}}</button>
        <span> {{ contador }}</span>
        <button (click)="acumular(-acumulador, false)">-{{ acumulador}}</button>
    `
})
export class ContadorComponent{

    texto: string = 'Contado app...';
    contador: number = 0;
    acumulador: number = 1;
    
    acumular(valor: number, acumulador: boolean): void{
      if(acumulador){
        this.acumulador += valor === -1 && this.acumulador === 1 ? 0 : valor;
      }else{
        this.contador += valor;
      }
    }
}
