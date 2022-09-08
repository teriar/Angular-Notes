buscarGifts(query:string){
    query= query.trim().toLowerCase();
    if(!this._historial.includes(query)){
    this._historial.unshift(query);
    }


    this._historial = this._historial.splice(0,10);

    console.log(this._historial);
  }
}