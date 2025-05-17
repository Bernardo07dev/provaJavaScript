const campoEntrada = document.getElementById("input");
const listaUl = document.getElementById("listaCores");

let coresSalvas = JSON.parse(localStorage.getItem("cores")) || [];

const mapaCores = {
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
  marrom: "#632100"
};

function atualizarLista() {
  listaUl.innerHTML = "";

  coresSalvas.forEach((cor) => {
    const item = document.createElement("li");
    item.textContent = cor.nome;
    item.style.backgroundColor = cor.codigo || "#ccc";

    // Se a cor for clara, muda a cor da fonte para preto
    if (!cor.codigo) {
      item.style.color = "#000";
    }

    listaUl.appendChild(item);
  });
}

campoEntrada.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const entrada = campoEntrada.value.trim().toLowerCase();

    if (entrada !== "") {
      const corHex = mapaCores[entrada] || "";

      coresSalvas.unshift({
        nome: entrada,
        codigo: corHex
      });

      localStorage.setItem("cores", JSON.stringify(coresSalvas));

      atualizarLista();
      campoEntrada.value = "";
    }
  }
});

const botaoLimpar = document.getElementById("limpar");

botaoLimpar.addEventListener("click", function () {
  coresSalvas = [];
  localStorage.removeItem("cores");
  atualizarLista();
});

// Inicializa a lista ao carregar
atualizarLista();
