// Evento de clique nos post-its
document.getElementById('postit1').addEventListener('click', function() {
    document.getElementById('revealBtn').classList.remove('hidden');
});

document.getElementById('postit2').addEventListener('click', function() {
    document.getElementById('revealBtn').classList.remove('hidden');
});

// Evento de clique no botão para revelar o vídeo
document.getElementById('revealBtn').addEventListener('click', function() {
    document.getElementById('videoContainer').classList.remove('hidden');
    document.getElementById('revealBtn').classList.add('hidden');
});



