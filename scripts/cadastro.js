const form = document.getElementById('formCadastro');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const tipo = document.getElementById('tipo').value;
  const nome = document.getElementById('nome').value.trim();
  const descricao = document.getElementById('descricao').value.trim();
  const local = document.getElementById('local').value.trim();
  const arquivoImagem = document.getElementById('imagemUpload').files[0];

  if (!arquivoImagem) {
    alert('Por favor, selecione uma imagem.');
    return;
  }

  const reader = new FileReader();

  reader.onload = function() {
    const imagemBase64 = reader.result;

    const novoAnimal = {
      nome,
      descricao,
      local,
      imagem: imagemBase64 // base64 da imagem
    };

    // salvar no localStorage
    let chave = tipo === 'adocao' ? 'adocao' : 'perdidos';
    let lista = JSON.parse(localStorage.getItem(chave)) || [];
    lista.push(novoAnimal);
    localStorage.setItem(chave, JSON.stringify(lista));

    mensagem.textContent = `Animal cadastrado com sucesso!`;
    form.reset();
  };

  reader.readAsDataURL(arquivoImagem);
});
