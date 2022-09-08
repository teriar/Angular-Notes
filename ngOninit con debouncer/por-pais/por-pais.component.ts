import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/Paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  constructor(private paisService:PaisService) { }

  termino:string = "Hola mundo"
  hayError:boolean = false;
  arrPaises:Country[] =[];
buscar(termino:string){
  
   this.termino = termino;
   this.paisService.buscarPais(this.termino).subscribe(paises=>{
    console.log(paises);
    this.hayError=false;
    this.arrPaises = paises;
   
   },(err)=>{
     console.info(err);
     this.hayError = true;
    this.arrPaises= [];
   });

}

sugerencias(termino:string){
    this.hayError=false;
    
}

}
