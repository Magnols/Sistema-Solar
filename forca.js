const palavras = [
    { dica: "É o planeta mais próximo do Sol.", resposta: "MERCURIO" },
    { dica: "É conhecido como Estrela Dalva.", resposta: "VENUS" },
    { dica: "É o planeta que mais se difere dos demais.", resposta: "TERRA" },
    { dica: "É o planeta do Sistema Solar com as características mais parecidas com as da Terra.", resposta: "MARTE" },
    { dica: "É o maior planeta do Sistema Solar e é conhecido como o gigante gasoso.", resposta: "JUPITER" },
    { dica: "É o planeta conhecido pelo seu conjunto de anéis.", resposta: "SATURNO" },
    { dica: "É um planeta de pouca luminosidade.", resposta: "URANO" },
    { dica: "É o último planeta do Sistema Solar.", resposta: "NETUNO" }
];

let palavraAtual, dicaAtual, letrasCertas, letrasErradas, tentativasRestantes;
const forcaImgs = ["./images/forca.png", "./images/forca01.png", "./images/forca02.png", "./images/forca03.png", "./images/forca04.png", "./images/forca05.png", "./images/forca06.png"];
const dicaElement = document.getElementById('dica');
const wordElement = document.getElementById('word');
const forcaImgElement = document.getElementById('forca-img');
const guessInput = document.getElementById('guess');
const resultadoElement = document.getElementById('resultado');
const novoJogoButton = document.getElementById('novo-jogo');

function iniciarJogo() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    palavraAtual = palavras[indiceAleatorio].resposta;
    dicaAtual = palavras[indiceAleatorio].dica;

    letrasCertas = [];
    letrasErradas = [];
    tentativasRestantes = 6;

    dicaElement.textContent = `Dica: ${dicaAtual}`;
    atualizarPalavra();
    atualizarForca();
    resultadoElement.textContent = '';
    guessInput.value = '';
    novoJogoButton.style.display = 'none';
    guessInput.disabled = false;
    document.getElementById('tentar').disabled = false;
    forcaImgElement.src = forcaImgs[0];
}

function atualizarPalavra() {
    const palavraDisplay = palavraAtual.split('').map(letra => (letrasCertas.includes(letra) ? letra : '_')).join(' ');
    wordElement.textContent = palavraDisplay;
}

function atualizarForca() {
    forcaImgElement.src = forcaImgs[6 - tentativasRestantes];
}

document.getElementById('tentar').addEventListener('click', () => {
    const letra = guessInput.value.toUpperCase();
    guessInput.value = '';

    if (letra && !letrasCertas.includes(letra) && !letrasErradas.includes(letra)) {
        if (palavraAtual.includes(letra)) {
            letrasCertas.push(letra);
        } else {
            letrasErradas.push(letra);
            tentativasRestantes--;
            atualizarForca();
        }

        atualizarPalavra();
        verificarResultado();
    }
});

function verificarResultado() {
    if (palavraAtual.split('').every(letra => letrasCertas.includes(letra))) {
        resultadoElement.textContent = 'PARABÉNS!!';
        confeteAnimacao();
        finalizarJogo();
    } else if (tentativasRestantes === 0) {
        resultadoElement.textContent = `Que pena não foi dessa vez. Tente novamente. A palavra era: ${palavraAtual}`;
        finalizarJogo();
    }
}

function finalizarJogo() {
    guessInput.disabled = true;
    document.getElementById('tentar').disabled = true;
    novoJogoButton.style.display = 'block';
}

novoJogoButton.addEventListener('click', iniciarJogo);

function confeteAnimacao() {
    const confete = document.createElement('div');
    confete.id = 'confete';
    document.body.appendChild(confete);

    // Adiciona uma simples animação de confete.
    confete.innerHTML = '🎉🎉🎉';
    confete.style.position = 'fixed';
    confete.style.top = '50%';
    confete.style.left = '50%';
    confete.style.fontSize = '3em';
    confete.style.transform = 'translate(-50%, -50%)';
    confete.style.animation = 'fall 3s forwards';

    setTimeout(() => {
        confete.style.display = 'none';
    }, 3000);
}

iniciarJogo();
