import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

 

  private api_Key = 'cROnbmDnNguqqtsegDIHGabBBfauMGEW';
  private _historial:string[] =[];

  get historial(){
    return   [...this._historial];
  }
  

    constructor( private http:HttpClient)  {}

   buscarGifts(query:string){
    query= query.trim().toLowerCase();
    if(!this._historial.includes(query)){
    this._historial.unshift(query);
    this._historial = this._historial.splice(0,10);
    }
    

   this.http.get('https://api.giphy.com/v1/gifs/search?api_key=cROnbmDnNguqqtsegDIHGabBBfauMGEW&q=dbz&limit=10')
   .subscribe((resp:any)=>{
    console.log(resp.data);
   })
   



  }
}
