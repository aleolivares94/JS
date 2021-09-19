//Se le pide la nota del examen al alumnx para saber su resultado.

let nombre = prompt("Cual es tu nombre?")
let apellido = prompt("Cual es tu apellido?")

console.log(`Bienvenidx ${nombre} ${apellido} al sistema de notas virtual de Matematicas II de Diciembre`)

let nota = prompt("Introduce tu nota");

if (Number(nota) == nota) {

    if (nota > 0 && nota <= 10) {
        if (nota < 3) {
            alert("A marzo");
        } else if (nota <= 5) {
            alert("Insuficiete");
        } else if (nota <= 6) {
            alert("Suficiente");
        } else if (nota < 7) {
            alert("Bien");
        } else if (nota < 9) {
            alert("Excelente");
            5
        } else if (nota >= 9) {
            alert("Sobresaliente");
        }
    } else {
        alert("Nota erronea");
    }

    if (nota >= 6) {
        console.log(`Nos vemos el año que viene ${nombre} ${apellido}`)

    } else if (nota <= 5) {
        console.log(`Nos vemos en marzo ${nombre} ${apellido}`)
    }

}