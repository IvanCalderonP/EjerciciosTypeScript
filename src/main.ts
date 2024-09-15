import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { Cabecerapagina } from './ejercicio1'
import { Calculadora } from './ejercicio2'
import { Cancion } from './ejercicio3'
import { Cuenta } from './Ejercicio 4'
import { Empleado } from './Ejercicio 5'


console.log("Ejercicio 1");
const cabecera=new Cabecerapagina("Pagina Web", "Rojo","Arial");
cabecera.establecerAlineacion("centrado");
cabecera.imprimirPropiedades();

console.log("Ejercicio 2");
const calculadora= new Calculadora(20,10)
console.log(`La suma es ${calculadora.suma()}`);
console.log(`La resta es ${calculadora.resta()}`);
console.log(`La multplicacion es ${calculadora.multiplicacion()}`);
console.log(`La division es ${calculadora.division()}`);
console.log(`La potencia es ${calculadora.potencia()}`);
console.log(`El factorial es ${calculadora.factorial()}`);

console.log("Ejercicio 3");
const cancion= new Cancion("Faded","Electronica")
cancion.SetAutor="Alan Walker"
cancion.ObtenerDatos()

console.log("Ejercicio 4");
const cuenta= new Cuenta("Ivan",100,"ahorro",200146)
cuenta.depositar()
cuenta.retirar(60)
cuenta.MostrarDatos()

console.log("Ejercicio 5");
const empleado = new Empleado("Ivan","Calderon", "Santa Ana", "7986-2430",18)

empleado.CargarSueldo(500)
empleado.ImprimirDatos()
empleado.mayorEdad()
empleado.ImprimirSueldo()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

