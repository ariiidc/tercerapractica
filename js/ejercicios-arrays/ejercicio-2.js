let lista=[]
let ciudades=""
let continuar=true
let resultado
let div=document.getElementById("pantalla")

function mostrarCiudades(ciudades){
  let resultado=""
  resultado+="Lista de ciudades"
  resultado+="<ul>"
  for(i=0;i<ciudades.length;i++){
    resultado+="<li>"+ciudades[i]+"</li>"
  }
  resultado+="</ul>"
  div.innerHTML+=resultado
}

  do{
  ciudades=prompt("Dime una ciudad")
  if (!isNaN(ciudades)){
    alert("Ingrese una ciudad")
  }
  if (confirm("Desea continuar agregando?")==false) {
    lista.push(ciudades)
    lista.push("paris")
    continuar=false
  }
  else{
    lista.push(ciudades)
  }
}while(continuar==true)
div.innerHTML+="Tu lista tiene: "+lista.length+" elementos"+"<br>"
div.innerHTML+="El primer elemento es:"+lista[0]+"<br>"
div.innerHTML+="El tercer elemento es:"+lista[2]+"<br>"
div.innerHTML+="El ultimo elemento es:"+lista[lista.length - 2]+"<br>"
alert("Tu segunda ciudad es: "+lista[1])
lista.splice(1, 1, 'Barcelona')
mostrarCiudades(lista)
