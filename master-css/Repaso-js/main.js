//alert('Hola mundo!!')
/*
var nombre ="Manuel Herrera";
var altura = 189;

var concatenacion = nombre + " " + altura

var datos = document.getElementById("datos");
//datos.innerHTML = concatenacion;

datos.innerHTML = `
    <h1>soy Manuel Herrera js</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
    `;

    if(altura >=190){
        datos.innerHTML += `<h1>Eres una persona Alta</h1>`;
    }else{
        datos.innerHTML += `<h1>Eres una persona Bajita</h1>`;
    }

for(var i = 2000; i<=2020; i++){
    //bloque de instrucciones
    datos.innerHTML +="<h2>Estamos en el año: "+i;
}*/

function MuestraMiNombre(nombre, altura){
    var misDatos = `
    <h1>soy Manuel Herrera js</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
    `;

    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
        datos.innerHTML = MuestraMiNombre("Manuel Herrera", 190);
}

imprimir();

var nombres = ['Victor', 'Antonio', 'Joaquin'];

//alert(nombres[1]);
document.write('<h1>Listado de nombres</h1>');
/*
for (i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>');
}*/

nombres.forEach((nombre) => {
    document.write(nombre + '<br/>');
});