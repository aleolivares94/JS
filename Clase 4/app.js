function solicitarNombre() {
    let nombreIngresado = prompt("Ingresa tu nombre")
    console.log("El nombre ingresado es " + nombreIngresado)
}

solicitarNombre()

alert("Bienvenido a la calculadora de IVA virtual")

let num = Number(prompt("A que precio queres agregarle el IVA?"))
let iva = Number(prompt("Ingrese el porcentaje de IVA que quiera agregar"))

const calculadoraIVA = (precio, porcentaje) => {
    let precioConIva;
    if (porcentaje < 10) {
        precioConIva = precio * Number(`1.0${porcentaje}`)
    } else {
        precioConIva = precio * Number(`1.${porcentaje}`)
    }
    return `El precio con el ${porcentaje}% de IVA, de $${precio} es igual a $${precioConIva}`;
}
console.log(calculadoraIVA(num, iva))


//----------------- Complementario--------------------//
// Se piden 2 numeros y se prueba si son multiplos entre si//


let divisor = Number(prompt("ingresa un número"))
let dividendo = Number(prompt("ingresa un segundo número"))

while (isNaN(divisor)) {
    divisor = Number(prompt("ingresa un número valido"))
}
while (isNaN(dividendo)) {
    dividendo = Number(prompt("ingresa un número valido"))
}

const Multiplo = (num1, num2) => {
    if (num1 % num2 == 0) {
        return 'Es multiplo';
    } else {
        return 'No es multiplo';
    }
}

console.log(Multiplo(divisor, dividendo))