const caixaTexto = document.getElementById("input");
const listaDeCores = document.getElementById("listaCores");

let listaCores = JSON.parse(localStorage.getItem("cores")) || [];

const cores= {
  rosa: "#FFC0CB",
  amarelo: "#FFFF00",
  roxo: "#800080",
  vermelho: "#FF0000",
  azul: "#0000FF",
  laranja: "#FFA500",
  preto: "#000000",
  branco: "#FFFFFF",
  verde: "#008000",
  azulclaro: "#3db5ff",
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
      let codigoCor = cores[corDigitada] || "";

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
