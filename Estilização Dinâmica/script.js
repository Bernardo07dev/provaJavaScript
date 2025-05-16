const caixaTexto = document.getElementById("inputCor");
const listaDeCores = document.getElementById("listaCores");

let listaCores = JSON.parse(localStorage.getItem("cores")) || [];

const coresComCodigo = {
  red: "#FF0000",
  blue: "#0000FF",
  green: "#008000",
  yellow: "#FFFF00",
  purple: "#800080",
  orange: "#FFA500",
  black: "#000000",
  white: "#FFFFFF",
  pink: "#FFC0CB",
};

function mostrarLista() {
  listaDeCores.innerHTML = "";
  //lenght para contar qnts elementos tem na lista
  for (let i = 0; i < listaCores.length; i++) {
    let itemDaLista = document.createElement("li");
    itemDaLista.textContent = listaCores[i].nome;

    if (listaCores[i].codigo) {
      itemDaLista.style.backgroundColor = listaCores[i].codigo;
    } else {
      itemDaLista.style.backgroundColor = "#ccc";
      itemDaLista.style.color = "#000";
    }

    listaDeCores.appendChild(itemDaLista);
  }
}

caixaTexto.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    let corDigitada = caixaTexto.value.trim().toLowerCase();

    if (corDigitada) {
      let codigoCor = coresComCodigo[corDigitada] || "";

      listaCores.unshift({
        nome: corDigitada,
        codigo: codigoCor,
      });

      localStorage.setItem("cores", JSON.stringify(listaCores));

      mostrarLista();

      caixaTexto.value = "";
    }
  }
});

mostrarLista();
