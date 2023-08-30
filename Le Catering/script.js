window.addEventListener("load", () => {
  const homeButton = document.querySelector(".home-button");

  /*   homeButton.addEventListener("click", () => {
    alert("Tocaste el boton!");
  }); */

  const aboutButton = document.querySelector('a[href="#about"]');
  aboutButton.addEventListener("click", (e) => {
    console.log(this);
    e.preventDefault();
  });
  /* 
  homeButton.addEventListener("dblclick", () => {
    homeButton.style.color = prompt("Elija su color favorito");
  }); */
  homeButton.addEventListener("mousemove", (e) => {
    console.log(`coordenadas ${e.clientX} , ${e.clientY}`);
  });
  const botones = document.querySelectorAll(".w3-button");

  botones.forEach((boton) => {
    boton.addEventListener("mouseover", () => {
      boton.style.color = "red";
    });
  });
});
