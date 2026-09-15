# JavaScript_Actividades
Actividades de java Script Bootcamp
Este repositorio contiene 10 ejecicio plantados en una guia y resueltos en JS.
Ejercicio 1: Datos Personales

Objetivo: Practicar la declaracion de variables y los tipos de datos primitivos.

Instrucciones:

Crea un archivo llamado ejercicio1. js y declara las siguientes variables:

. nombre (string) con tu nombre
. edad (number) con tu edad
. esEstudiante (boolean) con true
. ciudad (string) con tu ciudad
. hobby (string) con tu hobby favorito

Luego, imprime cada variable en la consola con un mensaje descriptivo.

.

Ejercicio 2: Operaciones Aritmeticas Basicas

Objetivo: Practicar operadores aritmeticos.

Instrucciones:

Crea un archivo llamado ejercicio2. js y declara las siguientes variables:

num1 con valor 20
. num2 con valor 6

Calcula e imprime:

1. La suma de num1 y num2
2. La resta de num1 y num2
3. La multiplicacion de num1 y num2
4. La division de num1 y num2
5. El residuo (módulo) de num1 y num2
6. La potencia de num1 elevado a num2
Ejercicio 3: Precio con IVA

Objetivo: Practicar operadores aritmeticos en un contexto real.

Instrucciones:

Crea un archivo llamado ejercicio3. js y declara las siguientes variables:

. precioProducto con valor 50000

. porcentajeIVA con valor 19

Calcula e imprime:

1. El valor del IVA ( precioProducto * porcentajeIVA / 100)
2. El precio total con IVA incluido ( precioProducto + valorIVA )
Ejercicio 4: Metodos de Strings

Objetivo: Practicar metodos de strings.

Instrucciones:

Crea un archivo llamado ejercicio4. js y declara la siguiente variable:

let texto = " JavaScript es Genial ";

Usando los métodos de strings, imprime:

1. El texto original
2. El texto sin espacios al inicio y final
3. El texto en mayusculas
4. El texto en minusculas
5. La longitud del texto original
6. Si el texto incluye la palabra "Genial"
Ejercicio 5: Generador de Nombre de Usuario

Objetivo: Practicar strings, interpolacion y metodos de strings.

Instrucciones:

Crea un archivo llamado ejercicio5. js y declara las siguientes variables:

let primerNombre = "Carlos";
let primerApellido = "Gómez";
let añoNacimiento = 1998;

Genera un nombre de usuario con el siguiente formato:

· Primera letra del nombre (minúscula)
· Apellido completo (minúscula)
· Últimos dos dígitos del año de nacimiento
Ejercicio 6: Operadores de Comparacion y Logicos

Objetivo: Practicar operadores de comparación y lógicos.

Instrucciones:

Crea un archivo llamado ejercicio6. js y declara las siguientes variables:

let edad = 20;
let tieneEntrada = true;
let esMayorDeEdad = edad >= 18;
let puedeIngresar = esMayorDeEdad && tieneEntrada;
let necesitaAcompanante = !esMayorDeEdad || !tieneEntrada;
Ejercicio 7: Inventario de Tienda (Arreglo)
Objetivo: Practicar arreglos y sus métodos.

Instrucciones:

Crea un archivo llamado ejercicio7. js y declara el siguiente arreglo:

let inventario = ["laptop", "mouse", "teclado", "monitor", "cable
HDMI"];

Realiza las siguientes operaciones e imprime el resultado de cada una:

1. Imprime el arreglo completo
2. Imprime el primer elemento
3. Imprime el ultimo elemento (usando .length - 1)
4. Agrega "webcam" al final con .push()
5. Elimina el ultimo elemento con .pop() e imprime el elemento eliminado
6. Agrega "audifonos" al principio con .unshift()
7. Elimina el primer elemento con .shift() e imprime el elemento eliminado
8. Imprime la cantidad total de elementos
Ejercicio 8: Perfil de Usuario (Objeto)
Objetivo: Practicar objetos, acceso a propiedades y modificación.

Instrucciones:

Crea un archivo llamado ejercicio8. js y declara el siguiente objeto:

let perfil = {
nombre: "María",

apellido: "Lopez",
edad: 28,
profesion: "Disenadora",
ciudad: "Medellin"

Realiza las siguientes operaciones e imprime el resultado de cada una:

1. Imprime el objeto completo
2. Imprime el nombre usando notacion de punto
3. Imprime el apellido usando notacion de corchetes
4. Cambia la edad a 29
5. Agrega una nueva propiedad hobby con valor "fotografia"
6. Elimina la propiedad ciudad
7. Imprime el objeto final
Ejercicio 9: Carrito de Compras (Arreglo de Objetos)
Objetivo: Practicar arreglos que contienen objetos.

Instrucciones:

Crea un archivo llamado ejercicio9. js y declara el siguiente arreglo:

let carrito = [
{ producto: "Laptop", precio: 2500000, cantidad: 1 },
{ producto: "Mouse", precio: 80000, cantidad: 2 },
{ producto: "Teclado", precio: 150000, cantidad: 1 }

Realiza las siguientes operaciones e imprime el resultado de cada una:

1. Imprime el carrito completo
2. Imprime el nombre del primer producto
3. Imprime el precio del segundo producto
4. Imprime la cantidad del tercer producto
5. Agrega un nuevo producto: { producto: "Monitor", precio: 800000,
cantidad: 1 } con .push()
6. Imprime el nombre del nuevo producto agregado
7. Calcula el total a pagar (suma de precio * cantidad de cada producto)
8. Imprime el total a pagar
Ejercicio 10: Ficha de Producto (Objeto Anidado)
Objetivo: Practicar objetos anidados y acceso a propiedades profundas.

Instrucciones:

Crea un archivo llamado ejercicio10.js y declara el siguiente objeto:

let producto = {
nombre: "Smartphone Galaxy",
precio: 1800000,
disponible: true,
colores: ["negro", "blanco", "azul"],
especificaciones: {
marca: "Samsung",
ram: "8GB",
almacenamiento: "256GB",
camara: "108MP"

vendedor: {
nombre: "TechStore",
ciudad: "Bogotá",
calificacion: 4.8

Realiza las siguientes operaciones e imprime el resultado de cada una:
1. Imprime el nombre del producto
2. Imprime el precio del producto
3. Imprime el primer color disponible
4. Imprime la marca desde las especificaciones
5. Imprime la RAM desde las especificaciones
6. Imprime la ciudad del vendedor
7. Imprime la calificacion del vendedor
8. Cambia la disponibilidad a false
9. Agrega un nuevo color "rojo" al arreglo de colores con . push()
10. Imprime el objeto completo actualizado
