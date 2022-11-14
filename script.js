const mostrar = document.getElementById("mostrar");
const buttonIncremet = document.getElementById("buttonAdd");
const buttonReset = document.getElementById("reset");
const buttonDecremet = document.getElementById("decrement");

let inicial = 0;
let mostrarArray = [];
buttonIncremet.addEventListener("click", function () {
  inicial++;
  mostrar.innerHTML = inicial;
  mostrarArray.push(inicial);
  if (mostrarArray.length % 2 == 0) {
    mostrar.style.color = "blue";
  } else {
    mostrar.style.color = "red";
  }
  console.log(mostrarArray);
});

buttonDecremet.addEventListener("click", function () {
  inicial--;
  mostrar.innerHTML = inicial;
});

buttonReset.addEventListener("click", function () {
  location.reload();
});
