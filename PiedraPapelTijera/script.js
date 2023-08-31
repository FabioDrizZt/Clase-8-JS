const computadora = () => {
  const opciones = ["piedra", "papel", "tijera"];
  const indice = Math.floor(Math.random() * opciones.length);
  return opciones[indice];
};

const obtenerResultado = (usuario, compu) => {
  console.log(usuario, compu);
  if (usuario === compu) return "Empate 🤔";

  switch (usuario) {
    case "piedra":
      return compu == "tijera" ? "Ganaste! 😎" : "Perdiste! 😢";
    case "papel":
      return compu == "piedra" ? "Ganaste! 😎" : "Perdiste! 😢";
    case "tijera":
      return compu == "papel" ? "Ganaste! 😎" : "Perdiste! 😢";
  }
};

const botones = document.querySelectorAll("button");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const eleccionUsuario = boton.textContent;
    const eleccionComputadora = computadora();
    const resultado = obtenerResultado(eleccionUsuario, eleccionComputadora);
    mostrarResultado(resultado);
  });
});

const mostrarResultado = (resultado) =>
  (document.getElementById("resultado").textContent = resultado);
