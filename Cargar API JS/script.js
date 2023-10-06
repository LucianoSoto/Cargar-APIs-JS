// let Persona = {
//     nombre: "Juan",
//     apellido: "Sosa",
//     edad: 22,
//     ciudad: "Buenos Aires",

//     ver: function(){
//         return `Nombre: ` + Persona.nombre + `<br>` + 
//         `Apellido: ` + Persona.apellido + `<br>` +
//         `Edad: ` + Persona.edad + `<br>` +
//         `Ciudad: ` + Persona.ciudad;
//     }
// };

// console.log(typeof Persona);

// document.getElementById("verJuan").innerHTML = Persona.ver();


let btn = document.getElementById("users");
let tableUsers = document.getElementById("tablaUsers");
let titulo = document.getElementById("titulo");

btn.addEventListener("click", cargarLista);

function cargarLista(){
    titulo.innerHTML = `<h1> Lista de Usuarios </h1>`
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => crearTabla(json))
    .catch(err => {
        alert(err);
     });  
}

function crearTabla(array){
    let tabla = 
    `<table id="tablaUsers" class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>User</th>
                <th>Email</th>
            </tr>
        </thead>
    </table>`
    array.forEach((i) =>{
        tabla += 
        `<tr onclick="cargarDatos(${i.id})">
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td>${i.email}</td>
        <tr>`

        
    })

    tableUsers.innerHTML = tabla;
}

function cargarDatos(id){
    fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then((res) => res.json())
     .then((user) => mostrarUsuario(user))
     .catch(err => {
        alert(err);
     });
}

function mostrarUsuario(user){
    titulo.innerHTML = `<h2> Datos Usuario </h2>`
    let usuario = 
    `<table class="table table-dark">
        <thead>
            <tr>
                <th> Nombre </th>
                <th> ${user.name} </th>
            </tr>
            <tr>
                <th> Email </th>
                <th> ${user.email} </th>
            </tr>
            <tr>
                <th> Ciudad </th>
                <th> ${user.address.city} </th>
            </tr>
            <tr>
                <th> Direccion </th>
                <th> ${user.address.street} </th>
            </tr>
            <tr>
                <th> Telefono </th>
                <th> ${user.phone} </th>
            </tr>
            <tr>
                <th> Sitio Web </th>
                <th> ${user.website} </th>
            </tr>
            <tr>
                <th> Compañia </th>
                <th> ${user.company.name} </th>
            </tr>
        </thead>
    </table>`;

    tableUsers.innerHTML = usuario; 
}