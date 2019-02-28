import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  minuts:number = 24;
  seconds:number=59;

  constructor() {
    
   }

  ngOnInit() {
    
  }

  tick(){

    if(--this.seconds < 0){
      this.seconds = 59;
    
    if(--this.minuts < 0){
      this.minuts = 24;
      this.seconds = 59;
    }
   }

  }


  start(){
    setInterval( ()=> this.tick(), 1000 );
  }

}
