//ingresas un numero entero y el programa detecta si es primo o no.

let num = Number(prompt("introduce un numero"))
let divisores = 0

if (num === 1)
    console.log("El numero no es valido")

else {
    for (let i = 2; i < num; i++) {
        if (num % 1 == 0) {
            console.log(`${num} / ${i} = ${num / i} no es primo`)
            divisores++
            break

        }
    }
}

if (divisores == 0)
    console.log(`${num} es primo`)