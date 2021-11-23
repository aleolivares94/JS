class Compra{
    constructor(id, producto, cantidad, marca){
        return {
            id: id,
            producto : producto || 'remera',
            cantidad : parseInt(quantity) || 1,
            marca : marca || 'adidas',
            OrdenLista: () => {
                return `Deseas comprar ${cantidad || 1} ${producto || 'remera'} de la marca ${marca || 'adidas'}. Gracias`
            }
        }
    }
}

let counter;

let jsonData = JSON.parse(localStorage.getItem('producto'));

const listadoPedidos = [];
const List = document.querySelector('#lista');

console.log(jsonData)
if(jsonData != null){
    listadoPedidos.push(JSON.stringify(jsonData));
    counter = jsonData.length;
    jsonData.map(obj =>{
        const item = `
            <div class="col-md-3 text-center">
                <p>ID : ${obj.id}</p>
                <h3>Producto : ${obj.producto}</h3>
                <p>Cantidad : ${obj.cantidad}</p>
                <h4>marca : ${obj.marca}</h4>
            </div>
            
            
        `;
        List.innerHTML += item;
    })
}else{
    counter = 0
}


listadoPedidos.sort((a, b) => (a.cantidad > b.cantidad) ? 1 : -1)

let objLocal = JSON.parse(localStorage.getItem('producto'));

const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const producto = document.querySelector('#producto').value
    const cantidad = document.querySelector('#cantidad').value

    const marca = document.querySelector('#marca')

    let optionSelected = marca.options[marca.selectedIndex].value
    
    if(producto.trim() != '' && cantidad != 0){
    const prod = new Compra(counter, producto, cantidad, optionSelected);  
    
    listadoPedidos.push(prod)
    localStorage.setItem('prod', JSON.stringify(listadoPedidos))
        const item = `
        <div class="col-md-3 text-center">
            <div class="card" style="width: 100%;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto}</h5>
                    <p class="card-text">Cantidad : ${cantidad}</p>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <li>ID : ${counter}</li>
            <li>Producto : ${producto}</li>
            <li>Cantidad : ${cantidad}</li>
            <li>Tienda : ${optionSelected}</li>
        </div>
        `;
        List.innerHTML += item;
    counter++;
    form.reset();   
    }else{
        alert('Hay campos incompletos')
    }
})

const borrarCarrito = document.querySelector('#clearCart')

borrarCarrito.addEventListener('click', (e)=>{
    e.preventDefault()
    localStorage.clear();
    List.innerHTML = '';
    counter = 0
})
