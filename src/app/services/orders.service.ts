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
      mesero: "juan"
    }
  ];

  constructor() {
    console.log("servicio funcionando")
   }

   getOrders(){
     return  this.ordersofTables;
   }
}
