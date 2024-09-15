export class Cabecerapagina{
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;

    constructor(titulo: string, color: string, fuente: string){
        this.titulo=titulo;
        this.color=color;
        this.fuente=fuente;
        this.alineacion="izquierda"/**Valor inicializado */
    }

    public ObtenerPropiedades(titulo: string, color: string, fuente: string){
        this.titulo=titulo;
        this.color=color;
        this.fuente=fuente;
    }
    public establecerAlineacion(alineacion:string){
        this.alineacion=alineacion;
    }
    imprimirPropiedades():void{
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineacion: ${this.alineacion}`);
    }
}