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
    cep: document.getElementById('cep').value,
    rua: document.getElementById('rua').value,
    numero: document.getElementById('numero').value,
    complemento: document.getElementById('complemento').value,
    bairro: document.getElementById('bairro').value,
    cidade: document.getElementById('cidade').value,
    estado: document.getElementById('estado').value,
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
const pesquisaInput = document.getElementById('pesquisa');
const filtroTipoSelect = document.getElementById('filtro-tipo-ajuda');

if (listaDiv) {
  let lista = JSON.parse(localStorage.getItem('necessidades')) || [];

  function renderizarLista(filtroTexto = '', filtroTipo = '') {
    listaDiv.innerHTML = '';

    const resultados = lista.filter(item => {
      const textoMatch =
        item.titulo.toLowerCase().includes(filtroTexto.toLowerCase()) ||
        item.descricao.toLowerCase().includes(filtroTexto.toLowerCase());

      const tipoMatch = filtroTipo === '' || item.tipoAjuda === filtroTipo;

      return textoMatch && tipoMatch;
    });

    if (resultados.length === 0) {
      listaDiv.innerHTML = '<p>Nenhuma necessidade encontrada com os filtros atuais.</p>';
    } else {
      resultados.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <h3>${item.titulo}</h3>
          <p><strong>Instituição:</strong> ${item.instituicao}</p>
          <p><strong>Tipo de Ajuda:</strong> ${item.tipoAjuda}</p>
          <p><strong>Descrição:</strong> ${item.descricao}</p>
          <p><strong>Data:</strong> ${item.data || 'A combinar'}</p>
          <p><strong>Endereço:</strong> ${item.rua}, ${item.numero}, ${item.complemento}, ${item.bairro}, ${item.cidade} - ${item.estado}</p>
          <p><strong>Contato:</strong> ${item.contato}</p>
        `;
        listaDiv.appendChild(card);
      });
    }
  }

  // Evento para o campo de pesquisa
  pesquisaInput.addEventListener('input', () => {
    renderizarLista(pesquisaInput.value, filtroTipoSelect.value);
  });

  // Evento para o filtro de tipo
  filtroTipoSelect.addEventListener('change', () => {
    renderizarLista(pesquisaInput.value, filtroTipoSelect.value);
  });

  // Renderizar inicialmente tudo
  renderizarLista();
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
