let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  total += precio;
  console.log(`Se agregó ${producto} al carrito.`);
}

function mostrarCarrito() {
  console.log('--- Carrito de Compras ---');
  for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].producto} - $${carrito[i].precio}`);
  }
  console.log(`Total: $${total.toFixed(2)}`);
}

function finalizarCompra() {
  if (carrito.length > 0) {
    console.log('--- Finalizar Compra ---');
    mostrarCarrito();

    let confirmacion = confirm('¿Desea finalizar la compra?');
    if (confirmacion) {
      console.log('¡Compra finalizada!');
      carrito = [];
      total = 0;
    } else {
      console.log('Compra cancelada.');
    }
  } else {
    console.log('El carrito está vacío. Por favor, agregue productos antes de finalizar la compra.');
  }
}