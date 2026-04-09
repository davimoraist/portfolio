document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.mosta');
    let indexAtual = 0;
    const tempoTroca = 3000; // Tempo em milissegundos (3 segundos)

    function mostrarSlide(index) {
        // Remove a classe ativo de todos
        slides.forEach(slide => slide.classList.remove('ativo'));

        // Reinicia o contador se chegar no fim
        if (index >= slides.length) {
            indexAtual = 0;
        } else if (index < 0) {
            indexAtual = slides.length - 1;
        } else {
            indexAtual = index;
        }

        // Mostra o slide atual
        slides[indexAtual].classList.add('ativo');
    }

    // Função que faz o slide pular para o próximo
    function proximoSlide() {
        indexAtual++;
        mostrarSlide(indexAtual);
    }

    // Inicializa o primeiro slide
    mostrarSlide(indexAtual);

    // Cria o loop automático
    setInterval(proximoSlide, tempoTroca);
});

function enviar() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var mensagem = document.getElementById("mensagem").value;

    console.log("Nome: " + nome);
    console.log("Telefone: " + telefone);
    console.log("Mensagem: " + mensagem);

    const fone = "556195756256";
    window.open(`https://wa.me/${fone}?text=${mensagem}`, '_blank')
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("mensagem").value = "";

    alert("Mensagem enviada com sucesso!");
}