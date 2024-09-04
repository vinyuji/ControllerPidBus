// public/app.js
document.getElementById('busForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const numero = document.getElementById('numero').value;
    const capacidade = parseInt(document.getElementById('capacidade').value);
    const pontos = JSON.parse(document.getElementById('pontos').value);
  
    const response = await fetch('/onibus', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ numero, capacidade, pontos })
    });
    const data = await response.json();
    console.log('Ônibus adicionado:', data);
  });
  
  document.getElementById('preverBtn').addEventListener('click', async () => {
    const response = await fetch('/prever', { method: 'GET' });
    const { previsao } = await response.json();
    document.getElementById('previsao').textContent = `Previsão: ${previsao} ônibus`;
  });
  