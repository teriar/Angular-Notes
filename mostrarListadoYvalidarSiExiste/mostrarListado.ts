import { Component, OnInit } from '@angular/core';


interface personaje {
  nombre:string,
  poder:number
}

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

nuevo:personaje ={
  nombre:'trunks',
  poder:14000
}

cambiarNombre(evento:any){
  console.log(evento.target.value)
}

agregar( ){
  let existe = false;
  if(this.nuevo.nombre.trim().length == 0 ){
    return;
  }

  for (let index = 0; index < this.personajes.length; index++) {
    if(this.personajes[index].nombre == this.nuevo.nombre)
      {
        this.personajes[index] = this.nuevo;
        existe = true;
        break;
      }
      
  } debugger;
  existe ?existe=false : this.personajes.push(this.nuevo);
  
   this.nuevo={
    nombre:'',
    poder:0
   }
 
  return;
   


}

}
