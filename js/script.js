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

    let lista = JSON.parse(localStorage.getItem('necessidades')) || [];
    lista.push(necessidade);
    localStorage.setItem('necessidades', JSON.stringify(lista));

    alert('Necessidade cadastrada com sucesso!');
    form.reset();
  });
}

// Verifica se está na página de visualização
const listaDiv = document.getElementById('lista-necessidades');
if (listaDiv) {
  const lista = JSON.parse(localStorage.getItem('necessidades')) || [];

  if (lista.length === 0) {
    listaDiv.innerHTML = '<p>Não há necessidades cadastradas no momento.</p>';
  } else {
    
  }
}
