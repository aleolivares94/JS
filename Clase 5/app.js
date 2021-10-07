class Compra {
    constructor(producto, marca, precio) {
        this.producto = producto,
            this.marca = marca,
            this.precio = precio

    }

    Items() {
        return `compraste una ${this.producto} marca ${this.marca} te salio ${this.precio} .Gracias!!`
    }


}

const prod = prompt('Ingrese un producto que desee comprar:')
const mar = prompt('Ingrese la marca')
const pre = Number(prompt('Coloque el precio'))

const pedido1 = new Compra(prod, mar, pre);

console.log(pedido1.Items());