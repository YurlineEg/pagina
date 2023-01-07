const carro = new carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById ('lista-productos')
const listaProductos = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEvento

function cargarEvento()
{
    productos.addEventListener('click',(e)=>{carro.comprarProducto(e)});

    carrito.addEventListener('click',(e)=>{carro.eliminarProducto(e)});

    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});
}