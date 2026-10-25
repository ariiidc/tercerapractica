let dado1=0
let dado2=0
let suma=0
let div=document.getElementById("pantalla")
const lista=[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
for(i=0;i<50;i++){
  dado1=Math.floor(Math.random() * 6) + 1
  dado2=Math.floor(Math.random() * 6) + 1
  suma=dado1+dado2
  lista[suma]++
}
let resultado=""
  resultado+="Suma de los dados"
  resultado+="<table>"
  resultado+="<tr><td>Suma</td><td>Apariciones</td></tr>"
  for(i=2;i<13;i++){
    resultado+=`<tr><td>Suma ${i}: </td><td>${lista[i]}</td></tr>`
  }
  resultado+="</table>"
  div.innerHTML+=resultado