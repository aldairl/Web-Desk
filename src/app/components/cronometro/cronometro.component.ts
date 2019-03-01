import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  @Input() minuts: number;
  @Input() mesa:number;
  

  seconds: number = 0;
  isStart: boolean = false;
  buttonLabel: String = "Aprobar";
  ocult:boolean = true;
  bottonEntregar:string = "Entregar";
  listo:boolean=true;
  

  constructor() {

    setInterval(() => this.tick(), 1000);
    

  }

  ngOnInit() {

  }

  tick() {

    if (this.isStart) {

      if (--this.seconds < 0) {
        this.seconds = 59;

        if (--this.minuts < 2) {
          alert(`el pedido de la mesa ${this.mesa} esta al limite de entrega`);
          this.buttonLabel = "Retardado!!!"
            this.minuts = 1;
            this.seconds = 59;
          
        }

      }
    }

  }


  start() {
    this.isStart = !this.isStart;
    
    if (this.buttonLabel == "Entregar" || this.buttonLabel == "En Progreso..." ) {
      
      console.log("esconder boton");
    }
    this.buttonLabel = this.isStart ? 'En Progreso...' : 'Aprobar';

  }

  entregado(){
    this.bottonEntregar = "Listo";
    this.listo = false;
    this.start();
    this.ocult = false;
  }

}
