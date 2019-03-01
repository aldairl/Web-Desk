import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  @Input() minuts:number;
  
  seconds:number=0;

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
