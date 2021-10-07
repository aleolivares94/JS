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

let cantidadProductos = parseInt(prompt('!!!!HotSale!!!, hoy tenes promociones en varios productos, cuando deseas comprar?'))

let counter = 0;
const listadoPedidos = [];

while (isNaN(cantidadProductos)) {
    cantidadProductos = parseInt(prompt('Debes ingresar un valor numerico. Cuantos productos deseas comprar?'))
}

while (counter < cantidadProductos) {
    const prod = prompt('Ingresa el producto que deseas comprar:')
    const mar = prompt('Ingrese la marca')
    const pre = Number(prompt('Coloque el precio que figura en la promo'))

    const producto = new Compra(prod, mar, pre);

    listadoPedidos.push(producto.Items())

    counter++;

}
console.log(listadoPedidos)


///////////////////////// COMPLEMENTARIO //////////////////////////////////}

/*
class Compra {
    constructor(producto, marca, precio) {
            return {
                producto: producto || 'ropa',
                marca: parseInt(marca) || `nike`,
                precio: precio || 1,
                OrdenLista: () => {
                        return `Compraste una ${producto || 'ropa'} marca ${marca || `nike`} te salio ${precio || 1}. Gracias!!`
            }
        }
    }
}

let cantidadProductos = parseInt(prompt('!!!!HotSale!!!, hoy tenes promociones en varios productos, cuando deseas comprar?'))

let counter = 0;
const listadoPedidos = [];

while (isNaN(cantidadProductos)) {
    cantidadProductos = parseInt(prompt('Debes ingresar un valor numerico. Cuantos productos deseas comprar?'))
}

while (counter < cantidadProductos) {
const producto = prompt('Ingresa el producto que deseas comprar:')
    let mar = parseInt(prompt('Ingrese la marca'))
    while(isNaN(pre) || pre < 0){
        pre = parseInt(prompt('Eliga el 2x1 que desee en prendas, mayor a 1 unidad'))
    }
    
    const producto = new Compra(prod, mar, pre);  


    listadoPedidos.push(producto)
    console.log(producto.OrdenLista())
    counter++;
}

listadoPedidos.sort((a, b) => (a.quantity > b.quantity) ? 1 : -1)

console.log(listadoPedidos)
*/