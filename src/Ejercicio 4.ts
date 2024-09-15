export class Cuenta{
    nombre:string
    cantidad:number
    tipo_cuenta:string
    numero_cuenta:number

    constructor(nombre:string,cantidad:number,tipo_cuenta:string,numero_cuenta:number
    ){
        this.nombre=nombre
        this.cantidad=cantidad
        this.tipo_cuenta=tipo_cuenta
        this.numero_cuenta=numero_cuenta
    }
    public depositar(){
        if(this.cantidad<=5.00){
            console.log("El valor que se debe depositar debe ser mayor que $5.00");
        }else{
            console.log(`El deposito se realizo correctamente, la cantidad depositada es: ${this.cantidad}`)
        }
    }

    public retirar(valor:number){
        if(valor<5.00){
            console.log("No hay nada en la la cuenta");
        }else{
            if(valor>this.cantidad){
                console.log("La cantidad que desea retirar no se encuentra en la cuenta ingrese otra cantidad");
            }else{
                console.log(`Se ha retidado $${valor} de su cuenta, le quedan $${this.cantidad-valor} en su cuenta`);
            }
        }
    }

    public MostrarDatos(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipo_cuenta}`);
        console.log(`Numero de cuenta: ${this.numero_cuenta}`);
    }
}