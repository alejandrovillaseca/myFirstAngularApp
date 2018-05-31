import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesServices {

  constructor() { }
  
  public listaDeEstudiantes(universidad):Array<string>{
    if(universidad == "Universidad de Chile") {
      return ["uno", "dos", "tres"];
    }else{
      return ["Luis Vidal"]
    }
  }

  
}
