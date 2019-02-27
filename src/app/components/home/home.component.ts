import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ordersofserver:any[] =[];

  constructor( private orders: OrdersService) { }

  ngOnInit() {
  
    this.ordersofserver = this.orders.getOrders();

    console.log(this.ordersofserver);

  }

  problem(order){

    return order.pago;
    
  }

}
