import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EstudiantesServices } from '../../../services/my-service.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  /**** SERVICES ******/
  constructor(myServices: EstudiantesServices) {
      this.estudiantes = myServices.listaDeEstudiantes('Universidad de Chile');
   }
  
  estudiantes: string[]



  /****FIN SERVICES ******/

  public titulo:string = "Lista de estudiantes"

  @Input('mi-universidad') universidad:string;
  @Output() seleccionado = new EventEmitter();

  /*estudiantes = [{nombre: '', apellido: '', edad: ''},
                 {nombre: '', apellido: '', edad: ''},
                 {nombre: '', apellido: '', edad: ''}
                ]*/

  alerta() {
    console.log("click");
    alert("ALERTA");
  }

  /*listaDeEstudiantes():Array<string>{
    if(this.universidad == "Universidad de Chile") {
      return ["uno", "dos", "tres"];
    }else{
      return ["Luis Vidal"]
    }
  }*/

  clickEstudiantes(evento):void {
    this.seleccionado.emit({nombre:evento.target.textContext});

  }

  ngOnInit() {
  }

  /*estudiantes = ['Carlos', 'Pepe', 'Test'];*/

  imgUrl = 'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5976ff485bafe8766278e970/luna-agua-portada_0.jpg'
  estilo = "rounded-circle"
}

