import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ordersofserver:any[] =[];
  newOrders :any[]=[];

  constructor( private orders: OrdersService) {

    this.orders.getNewOrders().subscribe((data:any) => {
      this.ordersofserver = data;
      console.log(this.ordersofserver);
    });
   
   }

  ngOnInit() {
  }

}
