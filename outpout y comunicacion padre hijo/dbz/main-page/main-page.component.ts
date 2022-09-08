import { Component, OnInit } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // constructor() { }

  // ngOnInit(): void {
  // }
personajes: personaje[]=[
  {
    nombre:'Goku',
    poder:15000

  },
  {
    nombre:'Vegeta',
    poder:7000
  }
];

nuevo:personaje={
  nombre:'Maesto roshi',
  poder:2000
}

agregarNuevoPersonaje(argumento:personaje){
 debugger;
 console.log('das');
  let existe = false;
  for (let index = 0; index < this.personajes.length; index++) {
    if(this.personajes[index].nombre.trim() == argumento.nombre.trim() )
      {
        this.personajes[index] = argumento;
        existe = true;
        break;
      }
    }
      existe ?existe=false : this.personajes.push(argumento);

     
   
}





}
