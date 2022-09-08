import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor( private actividedRoute:ActivatedRoute,
    private paisService:PaisService) { }

  ngOnInit(): void {

    this.actividedRoute.params
    .pipe(
      switchMap(({codigoPais}) => this.paisService.buscarPais(codigoPais))
    )
    .subscribe(resp=>{
      console.log(resp)
    })

    //version si switchmap
    // this.actividedRoute.params
    // .subscribe(({codigoPais})=>{
   
    //   this.paisService.buscarPais(codigoPais).subscribe(pais=>{
    //     console.log(pais)
    //   });
    // });

///esta si sirve
    this.activatedRoute.params.pipe(
    
      ).subscribe(({id})=>{console.log(id)})



  }

}
