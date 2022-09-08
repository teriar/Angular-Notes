import { Component, OnInit } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  //  constructor( private dbzService:DbzService) { 
    
  
nuevo:personaje={
  nombre:'Maesto roshi',
  poder:2000
}







}
