class Compra{
    constructor(id, producto, cantidad, marca){
        return {
            id: id,
            producto : producto || 'remera',
            cantidad : parseInt(cantidad) || 1,
            marca : marca || 'adidas',
            OrdenLista: () => {
                return `Deseas comprar ${cantidad || 1} ${producto || 'remera'} de la marca ${marca || 'adidas'}. Gracias`
            }
        }
    }
}

const itemCard = (obj) =>{
    return(`
    <div class="col-md-3 text-center">
        <div class="card" style="width: 100%;">
            <img src="https://via.placeholder.com/300/000000/FFFFFF/?text=${obj.producto}" class="card-img-top" alt="...">
            <div class="card-body">
                <span class="bardge">ID : ${obj.id}</span>
                <h5 class="card-title">${obj.producto}</h5>
                <p class="card-text">Cantidad : ${obj.cantidad}</p>
                <p class="card-text">${obj.marca}</p>
                <button data-index="${obj.id}" class="btn btn-danger d-block w-100 delete">Borrar Producto</button>
            </div>
        </div>
    </div>
    `)
}

let counter;

let jsonData = JSON.parse(localStorage.getItem('producto'));
const listadoPedidos = [];
const newListado = []

const List = document.querySelector('#lista');
if(jsonData != null){
    listadoPedidos.push(jsonData);    
    counter = jsonData.length;
    listadoPedidos.map(obj =>{
        obj.map(elem => {
            List.innerHTML += itemCard(elem);
        })
        
    })
}else{
    counter = 0
}

const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const producto = document.querySelector('#producto').value
    const cantidad = document.querySelector('#cantidad').value

    const marca = document.querySelector('#marca')

    let optionSelected = marca.options[marca.selectedIndex].value
    
    if(producto.trim() != '' && quantity != 0){
    const prod = new Compra(counter, producto, cantidad, optionSelected);  
    console.log(listadoPedidos.length)
        if(listadoPedidos.length != 0){

            newListado.push(...listadoPedidos[0], prod)
        }else{
            newListado.push(prod)
        }

    localStorage.setItem('prod', JSON.stringify(newListado))

        List.innerHTML += itemCard(prod);
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

const borrarElemento = document.querySelectorAll('.delete')

for (let i = 0; i < borrarElemento.length; i++) {
    borrarElemento[i].addEventListener("click", (e) => {
        const jsonNewData = JSON.parse(localStorage.getItem('prod'))
        console.log(jsonNewData)
        jsonNewData.splice(borrarElemento[i].dataset.index, 1)
        console.log(jsonNewData)
        localStorage.setItem('prod', JSON.stringify(jsonNewData))
        location.reload();
    });
}