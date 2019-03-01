import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MeseroServiceService {

  ListaMeseros:any[];
  mesero='';

  constructor() {
    this.ListaMeseros= [
      {
        nombre: 'Danilo Eraso'
      },
      {
        nombre: 'Herman Gabriel Eraso Rosero '
      },
      {
        nombre: 'David Leon '
      },
      {
        nombre: 'Aldair Luna'
      },
    ];
    
  }

  //Metodos para el manejo de la lisa de meseros
  
  getListaMeseros() {
    return this.ListaMeseros;
  }

  getMesero() {
    return this.mesero;
  }

  agregarMesero(mesero:string) {
    this.mesero=mesero;
  }

   
}
// Declarando interface



