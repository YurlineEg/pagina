const carro = new carrito();
const carrito = document.getElementById('Box_of_products');
const productos = document.getElementById ('list_products')
const listaProductos = document.querySelector('#lista-pedido tbody')
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEvento

function cargarEvento()
{
    productos.addEventListener('click',(e)=>{carro.comprarProducto(e)});

    carrito.addEventListener('click',(e)=>{carro.eliminarProducto(e)});

    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});
}