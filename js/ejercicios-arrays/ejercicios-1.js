const meses= ["enero", "febrero", "marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
let div=document.getElementById("pantalla")
function mostrarMeses(meses){
  let resultado=""
  resultado+="Lista de meses"
  resultado+="<ul>"
  for(i=0;i<meses.length;i++){
    resultado+="<li>"+meses[i]+"</li>"
  }
  resultado+="</ul>"
  div.innerHTML+=resultado
}
mostrarMeses(meses)