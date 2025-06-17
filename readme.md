# 📢 Plataforma Voluntária

Uma aplicação web simples para conectar ONGs e voluntários. O projeto permite o cadastro e a visualização de necessidades de ajuda social, com integração de busca por CEP via API e funcionalidades de filtro/pesquisa.

---

## 📌 Funcionalidades

### ✅ Cadastro de Necessidades

- Formulário com os seguintes campos:
  - Nome da Instituição
  - Tipo de Ajuda (Educação, Saúde, Meio Ambiente, etc)
  - Título da Necessidade
  - Descrição Detalhada
  - Data da Ação
  - Local da Atividade
  - Contato da Instituição
  - **CEP** → Integração com a API ViaCEP
  - **Endereço Completo (Rua, Bairro, Cidade, Estado)** → Preenchimento automático ao digitar o CEP

---

### ✅ Integração com a API ViaCEP

- O usuário digita o **CEP**, e o sistema automaticamente preenche os campos de:
  - Rua
  - Bairro
  - Cidade
  - Estado

---

### ✅ Visualização de Necessidades

- Exibição de todas as necessidades cadastradas em formato de **cards**.
- Cada card mostra:
  - Título
  - Nome da Instituição
  - Tipo de Ajuda
  - Descrição
  - Data da Ação
  - Endereço Completo
  - Contato

---

### ✅ Funcionalidade de Pesquisa e Filtro

- **Campo de Pesquisa:** permite buscar por palavras-chave no **Título** ou na **Descrição**.
- **Filtro por Tipo de Ajuda:** permite filtrar as necessidades exibidas por categoria de ajuda (Educação, Saúde, etc).

---

## 📂 Estrutura de Pastas

📦 plataforma-voluntaria
├── index.html → Página inicial
├── formularioNecessidade.html → Página de cadastro de necessidades
├── necessidades.html → Página para visualizar as necessidades
├── css
│ └── style.css → Estilo da aplicação
└── js
└── script.js → Lógica JavaScript (cadastro, API ViaCEP, exibição, filtros)


---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- API ViaCEP (https://viacep.com.br/)

---

## 💾 Armazenamento

Os dados das necessidades são armazenados localmente no navegador, usando o **localStorage**, garantindo persistência simples entre sessões (enquanto o navegador não for limpo).

---

## 🚀 Como Rodar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/plataforma-voluntaria.git

2. Abra o projeto em um editor de código (ex: VS Code).

3. Abra o arquivo index.html no navegador.

4. Navegue entre as páginas para cadastrar e visualizar necessidades.

✅ Melhorias Futuras (Sugestões)
 .Persistência com banco de dados real (ex: Firebase, MySQL).

 .Autenticação de usuários (ONGs e Voluntários).

 .Página de perfil para voluntários.

 .Responsividade para mobile.
