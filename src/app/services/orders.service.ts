import { Injectable } from '@angular/core';

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
      mesero: "juan",
      nopago:false
    }
  ];

  constructor() {
    console.log("servicio funcionando")
   }

   getOrders(){
     return  this.ordersofTables;
   }
}
