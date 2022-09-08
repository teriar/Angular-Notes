// import { Component, OnInit } from '@angular/core';


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
nuevo:personaje ={
  nombre:'trunks',
  poder:14000
}

cambiarNombre(evento:any){
  console.log(evento.target.value)
}

agregar( ){
   console.log(this.nuevo);
}

}
