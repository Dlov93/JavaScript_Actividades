let perfil = {nombre:"Maria",
            apellido: "Lopez",
            edad:28,
            profesion:"Diseñadora",
            ciudad:"Medellin"
 };

console.log(perfil);
console.log("Nombre: "+perfil.nombre);
console.log("Apellido: "+perfil["apellido"]);
perfil.edad=29;
console.log(perfil);
perfil.hobby="fotografia";
console.log(perfil);
 delete perfil["ciudad"];
 console.log(perfil);
