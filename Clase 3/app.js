//ingresas un numero entero y el programa detecta si es primo o no.

let num = Number(prompt("introduce un numero"))
let divisores = true;

for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
        divisores = false;
    }
}

if (divisores) {
    alert(`${num} es un numero primo`);
} else {
    alert(`${num} no es un numero primo`);
}