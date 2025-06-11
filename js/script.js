// Verifica se está na página de cadastro
const form = document.getElementById('form-cadastro');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const necessidade = {
      instituicao: document.getElementById('instituicao').value,
      tipoAjuda: document.getElementById('tipo-ajuda').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value,
      data: document.getElementById('data').value,
      local: document.getElementById('local').value,
      contato: document.getElementById('contato').value
    };

  });
}
