document.addEventListener('DOMContentLoaded', () => {
  const tempoSpan = document.getElementById('tempo');
  const mensagem = document.getElementById('mensagem');

  let tempoDecorrido = parseInt(sessionStorage.getItem('tempo')) || 0;
  tempoSpan.textContent = tempoDecorrido;

  setInterval(() => {
    tempoDecorrido++;
    tempoSpan.textContent = tempoDecorrido;
    sessionStorage.setItem('tempo', tempoDecorrido);

    if (tempoDecorrido > 10) {
      mensagem.textContent = "Você ainda está aí? A sessão pode expirar em breve!";
    }
  }, 1000);
});