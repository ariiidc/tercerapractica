let numero1=0

function ParOImpar(numero3){
  if (numero3%2==0){
    return alert("Tu numero es par")
  }
  else{
    return alert("Tu numero es impar")
  }
}
function verificarNumero (numero2){
  do{
  numero2=prompt("Dime un numero")
  if (isNaN(numero2)|| numero2%1!==0){
    alert("Ingrese un numero entero")
  }
  else{
    return numero2
  }
}while(isNaN(numero2)|| numero2%1!==0)
}
numero1=verificarNumero(numero1)
ParOImpar(numero1)
