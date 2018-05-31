import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-pipe',
  templateUrl: './my-pipe.component.html',
  styleUrls: ['./my-pipe.component.css']
})
export class MyPipeComponent implements OnInit {

  jugador = {nombre: 'Cristian',
             apellido: 'Moreira',
             posicion: 'Delantero',
             rut: '125794068',
             cumpleanos: new Date("January 21, 1980, 10:12:00"),
             salario: 2000}

  _temperatura = -2;
  constructor() { }

  ngOnInit() {
  }

}
