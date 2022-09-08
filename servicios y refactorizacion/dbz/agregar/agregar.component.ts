import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent{

  @Input() nuevo: personaje={
    nombre: '', poder:0 
  };

  
  constructor(private dbzService:DbzService){

  }



  cambiarNombre(evento:any){
    console.log(evento.target.value)
  }
  
  agregar( ){
    let existe = false;
    if(this.nuevo.nombre.trim().length == 0 ){
      return;
    }
  
     console.log(this.nuevo);
      this.dbzService.agerarPersonaje(this.nuevo);
     this.nuevo={
      nombre:'',
      poder:0
     }
    return;
     
  
  
  }
}
