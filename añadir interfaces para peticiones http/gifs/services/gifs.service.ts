import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.Interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

 

  private api_Key = 'cROnbmDnNguqqtsegDIHGabBBfauMGEW';
  private _historial:string[] =[];
  
  public resultados :Gif[]=[];


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
    

   this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=cROnbmDnNguqqtsegDIHGabBBfauMGEW&q=${query}&limit=10`)
   .subscribe(resp=>{
    console.log(resp.data);
    this.resultados = resp.data;
    
   })
   



  }
}
