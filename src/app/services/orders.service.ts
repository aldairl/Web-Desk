import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  private ordersofTables: any[] =[
    {
      tableN: 1,
      precio: 400,
      tiempo: 20,
      estado: "pago",
      mesero: "juan",
      nopago: false
    },
    {
      tableN: 2,
      precio: 200,
      tiempo: 10,
      estado: "problema al realizar pago",
      mesero: "pedro",
      nopago:true
    },
    {
      tableN: 3,
      precio: 100,
      tiempo: 15,
      estado: "pago",
      mesero: "Ana",
      nopago:false
    }
  ];

  constructor( private http: HttpClient ) {
    console.log("servicio funcionando")
   }

   getOrders(){
     return  this.ordersofTables;
   }

   getNewOrders(){
    return this.http.get('https://api.myjson.com/bins/xddl2');
   }
   
}
