const datos ={
    image:'https://cdn.pixabay.com/photo/2018/04/28/22/03/tree-3358468_960_720.jpg' ,
    correo:'lbarcoc2@unemi.edu.ec'
}
const mostrarDatos = (avatar) => 
    `
        <img src=${avatar.image} alt=${avatar.correo}/>
    `
console.log(x)
const $root = document.getElementById("root")
$root.innerHTML="<h2>Destructuring</h2>"
$root.innerHTML += mostrarDatos(datos)
