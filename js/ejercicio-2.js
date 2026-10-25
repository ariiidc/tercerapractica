let palabra=""
function verificarPalabra (palabra1){
  do{
  palabra1=prompt("Dime una palabra")
  if (!isNaN(palabra1)){
    alert("Ingrese una palabra")
  }
  else{
    return palabra1
  }
}while(!isNaN(palabra1))
}
function MayusoMinusculas(palabra1){
  let letra=""
  let letrasMinusculas=0
  let letrasMayusculas=0
  for(i=0;i<palabra1.length;i++){
    letra = palabra1.charAt(i)
    if(letra===letra.toUpperCase()){
      letrasMayusculas+=1
    }
    else{
      letrasMinusculas+=1
    }
  }
  if(letrasMayusculas>0&&letrasMinusculas>0){
    alert("Tu palabra tiene mayusculas y minusculas")
  }
  else if (letrasMayusculas>0){
    alert("Tu palabra tiene mayusculas")
  }
  else{
    alert("Tu palabra tiene minusculas")
  }

}
palabra=verificarPalabra(palabra)
MayusoMinusculas(palabra)