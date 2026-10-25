let ladoA=0
let ladoB=0
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
function perimetro(ladoA,ladoB){
  return alert("El perimetro es: "+2 * (ladoA + ladoB))
}
ladoA=verificarNumero(ladoA)
ladoB=verificarNumero(ladoB)
perimetro(ladoA, ladoB)