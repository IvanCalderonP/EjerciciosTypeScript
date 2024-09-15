abstract class Persoma{
    nombre:string
    apellido:string
    direccion:string
    telefono:string
    edad:number

    constructor(nombre:string,apellido:string,direccion:string,telefono:string,edad:number){
        this.nombre=nombre
        this.apellido=apellido
        this.direccion=direccion
        this.telefono=telefono
        this.edad=edad
    }

    public mayorEdad(){
        if(this.edad>=18){
            console.log(`${this.nombre} es mayor de edad`);
        }else{
            console.log(`${this.nombre} es menor de edad`);
        }
    }
    public abstract ImprimirDatos():void
}

export class Empleado extends Persoma{
    sueldo:number

    constructor(nombre:string,apellido:string,direccion:string,telefono:string,edad:number){
        super(nombre, apellido, direccion, telefono, edad)
        this.sueldo=0
    }

    public CargarSueldo(sueldo:number){
        this.sueldo=sueldo
    }

    public ImprimirSueldo(){
        console.log(`Sueldo: ${this.sueldo}`);
        
    }
    public ImprimirDatos(): void {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Direccion: ${this.direccion}`);
        console.log(`Telefono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
    }
}