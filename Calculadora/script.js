const appendToDisplay = (valor) =>
  (document.querySelector("#display").value += valor);

const clearDisplay = () => (document.getElementById("display").value = "");

const calculate = () => {
  let display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (err) {
    console.error(err);
    display.value = "error";
  }
};
