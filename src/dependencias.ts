import { AstMemoryEfficientTransformer } from "@angular/compiler";

export class computador{
    public procesador: Procesador;
    public memoria: Memoria;

    constructor(procesador: Procesador){
        this.procesador = procesador;
        this.memoria = new Memoria();
    }

}

class Procesador {
    core = 2
    velocidad = "2.5 Mhz"
    marca = "Intel"

    constructor(cores: number, velocidad: string, marca: string){
        this.core = cores;
        this.velocidad = velocidad;
        this.marca = marca;
    }
}
class Memoria{
    gigas = 8
    marca = "Kingstong"
}