import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
 
})
export class BusquedaComponent  {

@ViewChild('txtBuscar') txtBUscar!:ElementRef<HTMLInputElement>;

  buscar(){
    console.log(this.txtBUscar.nativeElement.value);

    this.txtBUscar.nativeElement.value='';
  }
}
