function Coincidencias(texto, buscar) {
  let regex = new RegExp(buscar, 'gi');
  return texto.replace(regex, match => "<font color=red>"+match+"</font>");
}

function buscar() {
  let parrafo = document.getElementById("parrafo").value;
  let texto = document.getElementById("texto").value;
  let algo = Coincidencias(parrafo, texto);

  document.getElementById('respuesta').innerHTML = algo;
}