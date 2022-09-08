import { Injectable } from "@angular/core";
import { personaje } from "../interfaces/dbz.interface";

@Injectable()
 export class DbzService{


   private _personajes: personaje[]=[
        {
          nombre:'Goku',
          poder:15000
      
        },
        {
          nombre:'Vegeta',
          poder:7000
        }
      ];

      get personajes():personaje[]{
        return [...this._personajes];
      }

  constructor(){}

  agerarPersonaje(personaje:personaje){

    let existe = false;
    for (let index = 0; index < this._personajes.length; index++) {
      if(this._personajes[index].nombre.trim() == personaje.nombre.trim() )
        {
          this._personajes[index] = personaje;
          existe = true;
          break;
        }
      }
        existe ?existe=false : this._personajes.push(personaje);



  }

}