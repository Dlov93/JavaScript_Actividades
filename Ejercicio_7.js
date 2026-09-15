let inventario=["laptop", "mouse", "teclado", "monitor", "cable HDMI"];
console.log(inventario);
console.log("Primer elemento: "+inventario[0]);
console.log("Ultimo elemento: "+inventario[inventario.length-1]);
inventario.push("webcam");
console.log("Push 'webcam': "+inventario);
console.log("Ultimo eliminado: "+inventario.pop());
inventario.unshift("audifonos");
console.log("Unshift 'audifonos': "+inventario);
inventario.shift([0]);
console.log("Shift: "+inventario);
console.log("Total de elementos: "+inventario.length);


