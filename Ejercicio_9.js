let carrito = [
{ producto: "Laptop", precio: 2500000, cantidad: 1 },
{ producto: "Mouse", precio: 80000, cantidad: 2 },
{ producto: "Teclado", precio: 150000, cantidad: 1 }
];

console.log(carrito);
console.log("Nombre Primer producto: "+carrito[0].producto);
console.log("Precio Segundo Producto: "+ carrito[1].precio);
console.log("Cantidad del tercer producto: "+ carrito[2].cantidad);
carrito.push({producto: "Monitor", precio: 800000,cantidad: 1});
console.log("Nombre dle ultimo carrito agregado: "+ carrito[carrito.length-1].producto);
total=(carrito[0].precio*carrito[0].cantidad)+(carrito[1].precio*carrito[1].cantidad)+ (carrito[2].precio*carrito[2].cantidad)+ (carrito[3].precio*carrito[3].cantidad);
console.log("El total a pagar es: "+total); 
