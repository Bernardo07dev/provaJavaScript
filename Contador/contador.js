document.addEventListener('DOMContentLoaded', () => {
  const tempoEl = document.getElementById('tempo');
  const alertaEl = document.getElementById('alerta');

  let segundosDecorridos = parseInt(sessionStorage.getItem('tempo')) || 0;
  tempoEl.textContent = segundosDecorridos;

  setInterval(() => {
    segundosDecorridos++;
    tempoEl.textContent = segundosDecorridos;
    sessionStorage.setItem('tempo', segundosDecorridos);

    if (segundosDecorridos > 10) {
      alertaEl.textContent = "Ainda por aqui? A sessão pode encerrar em breve.";
    }
  }, 1000);
});