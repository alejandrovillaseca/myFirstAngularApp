import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app angular';
  pais:string;
  laUniversidad = "Universidad de Chile";

  mostrarEstudiante(evento):void {
    console.log(evento.nombre);
  }
}

export class NgbdAccordionBasic {
}