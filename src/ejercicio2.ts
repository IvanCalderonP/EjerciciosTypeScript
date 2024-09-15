export class Calculadora{
    num1:number;
    num2:number;

    constructor(num1:number, num2:number){
        this.num1=num1
        this.num2=num2
    }
    public suma(){
        return this.num1+this.num2;
    }
    public resta(){
        return this.num1-this.num2
    }
    public multiplicacion(){
        return this.num1*this.num2
    }
    public division(){
        if(this.num2==0){
            throw new Error("No se puede dividir entre 0")
        }
        return this.num1/this.num2
    }
    public potencia(){
        return Math.pow(this.num1,this.num2)
    }
    public factorial(){
        if (this.num1 < 0) {
            throw new Error("El número debe ser mayor o igual a 0.");
        }
        if (this.num1 === 0 || this.num1 === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= this.num1; i++) {
            resultado *= i;
        }
        return resultado;
    }
}