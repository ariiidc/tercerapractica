function verificarNumero (numero2){
  do{
  numero2=Number(prompt("Dime un numero"))
  if (isNaN(numero2)){
    alert("Ingrese un numero")
  }
  else{
    return numero2
  }
}while(isNaN(numero2))
}

function Tablas(numero){
  div.innerHTML+= `La tabla de tu numero es:<br> `
  let resultado=0
  for(i=1;i<=10;i++){
    resultado=numero*i
    div.innerHTML+=numero+" * "+i+" = "+resultado+"<br>"
  }
}
let div=document.getElementById("pantalla")
let numero1=0
numero1=verificarNumero(numero1)
Tablas(numero1)