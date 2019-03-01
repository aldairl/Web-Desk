import { Component, OnInit, Input } from '@angular/core';
import { MeseroServiceService } from 'src/app/services/mesero-service.service';


@Component({
  selector: 'app-elegir-mesero',
  templateUrl: './elegir-mesero.component.html',
  styleUrls: ['./elegir-mesero.component.css']
})
export class ElegirMeseroComponent implements OnInit {

  listaMeseros: any[]; 
  mesero:string='sin Asignar';

  constructor( private  meseroService:MeseroServiceService) {
    this.listaMeseros = this.meseroService.getListaMeseros();
  }

  ngOnInit() {
   
  }

}
