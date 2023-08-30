let resultado = document.querySelector(".resultado");
let btnSubir = document.querySelector(".subir");
let btnBajar = document.querySelector(".bajar");
let btnReset = document.querySelector(".reset");

let valor = 0;

btnSubir.addEventListener("click", () => {
  valor++;
  resultado.innerText = valor;
});
btnBajar.addEventListener("click", () => {
  valor--;
  resultado.innerText = valor;
});
btnReset.addEventListener("click", () => {
  valor = 0;
  resultado.innerText = valor;
});
