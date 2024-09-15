export class Cancion{
    titulo:string
    genero:string
    private autor:string

    constructor(titulo:string,genero:string){
        this.titulo=titulo
        this.genero=genero
        this.autor=''
    }
    set SetAutor(autor:string){
        this.autor=autor
    }
    get GetAutor(){
        return this.autor
    }
    
    public ObtenerDatos():void{
        console.log(`Titulo de la cancion: ${this.titulo}`);
        console.log(`El genero de la cancion: ${this.genero}`);
        console.log(`El autor de la cancion: ${this.GetAutor}`);
    }
}