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
      cep: document.getElementById('cep').value,
      rua: document.getElementById('rua').value,
      bairro: document.getElementById('bairro').value,
      cidade: document.getElementById('cidade').value,
      estado: document.getElementById('estado').value,
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
    lista.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
      <h3>${item.titulo}</h3>
      <p><strong>Instituição:</strong> ${item.instituicao}</p>
      <p><strong>Tipo de Ajuda:</strong> ${item.tipoAjuda}</p>
      <p><strong>Descrição:</strong> ${item.descricao}</p>
      <p><strong>Data:</strong> ${item.data || 'A combinar'}</p>
      <p><strong>Endereço:</strong> ${item.rua}, ${item.bairro}, ${item.cidade} - ${item.estado}</p>
      <p><strong>Contato:</strong> ${item.contato}</p>
    `;



      listaDiv.appendChild(card);
    });

  }
}

const cepInput = document.getElementById('cep');

if (cepInput) {
  cepInput.addEventListener('blur', function() {
    const cep = cepInput.value.replace(/\D/g, '');

    if (cep.length !== 8) {
      alert('CEP inválido! Digite um CEP com 8 dígitos.');
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          alert('CEP não encontrado!');
        } else {
          document.getElementById('rua').value = data.logradouro;
          document.getElementById('bairro').value = data.bairro;
          document.getElementById('cidade').value = data.localidade;
          document.getElementById('estado').value = data.uf;
        }
      })
      .catch(() => {
        alert('Erro ao buscar o CEP!');
      });
  });
}
