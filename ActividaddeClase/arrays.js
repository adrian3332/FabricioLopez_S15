const numeros = [20,40,20,80,100]
let alumnos = [
    {nombre:"Yadi",n1:20,n2:50},
    {nombre:"Erick",n1:50,n2:50},
    {nombre:"Daniel",n1:40,n2:50},
    {nombre:"Danni",n1:40,n2:40},
    {nombre:"Noris",n1:30,n2:40},
    {nombre:"Chiky",n1:50,n2:40},
]
console.clear()
//console.log("Alumnos → ",alumnos[1].nombre)
//for (pos=0;pos<alumnos.length;pos++)
    //console.log("Alumnos → ",alumnos[pos].nombre)
//lumnos.forEach(alumno => {
   // console.log(alumno)
//});
const fun = alumno =>{
    prom=alumno.n1+alumno.n2
    console.log(alumno.nombre,prom)
}
//alumnos.forEach(fun);

const items = alumnos.map (item => {
     prom=(item.n1+item.n2)/2
     return [item.nombre,prom]
 });
//console.log(items)
const items = alumnos.filter (item => item.nombre!="Daniel");
//console.log(items) 
alumnos= [...items] 
//console.log(alumnos)   