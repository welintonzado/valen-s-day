document.getElementById('postit1').addEventListener('click', function() {
    alert('Você clicou na primeira surpresa!');
});

document.getElementById('postit2').addEventListener('click', function() {
    alert('Você clicou na segunda surpresa!');
});

// Função para mostrar o vídeo ao clicar no botão
document.getElementById('revealBtn').addEventListener('click', function() {
    document.getElementById('videoContainer').classList.remove('hidden');
    document.getElementById('revealBtn').classList.add('hidden');
});

// Função para revelar o botão de vídeo após interação
document.getElementById('postit2').addEventListener('click', function() {
    document.getElementById('revealBtn').classList.remove('hidden');
});
