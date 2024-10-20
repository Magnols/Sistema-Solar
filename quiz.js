const questions = [
    {
        question: "Quantos planetas fazem parte do Sistema Solar atualmente?",
        answers: ["Nove planetas", "Sete planetas", "Oito planetas", "Seis planetas"],
        correct: 2
    },
    {
        question: "Qual é a principal composição da atmosfera de Mercúrio?",
        answers: ["Nitrogênio e oxigênio",
          "Hélio e hidrogênio", "Gás carbônico e metano", "Oxigênio e vapor d'água"],
        correct: 1
    },
    {
        question: "Por que Vênus é conhecido como 'Estrela D'alva'?",
        answers: ["Por ser o planeta mais próximo do Sol",
          "Por ser um dos astros mais brilhantes no céu noturno",
          "Por ter uma temperatura elevada",
          "Por suas semelhanças com a Terra"],
        correct: 1
    },
    {
        question: "Qual é a distância da Terra em relação ao Sol?",
        answers: ["108.200.000 km",
          "227.940.000 km",
          "149.600.000 km",
          "57.910.000 km"],
        correct: 2
    },
    {
        question: "O que dá à superfície de Marte sua cor avermelhada?",
        answers: ["Poeira de ferro",
          "Magnetite",
          "Silício",
          "Óxido de carbono"],
        correct: 1
    },
    {
        question: "Qual é a distância de Júpiter em relação ao Sol?",
        answers: ["149.600.000 km",
          "1.429.000.000 km",
          "227.940.000 km",
          "57.910.000 km"],
        correct: 1
    },
    {
        question: "Qual é a distância de Saturno em relação ao Sol?",
        answers: ["149.600.000 km",
          "1.427.000.000 km",
          "1.429.000.000 km",
          "577.000.000 km"],
        correct: 1
    },
    {
        question: "Qual é a característica mais notável de Urano?",
        answers: ["Os anéis",
          "A cor azul",
          "A inclinação axial extrema",
          "O tamanho"],
        correct: 2
    },
    {
        question: "Qual é a distância de Netuno em relação ao Sol?",
        answers: ["2.870.000.000 km",
          "1.427.000.000 km",
          "4.500.000.000 km",
          "3.000.000.000 km"],
        correct: 3
    },
    {
        question: "Qual é a ordem correta dos planetas, começando pelo mais próximo do Sol?",
        answers: [
            "Sol → Mercúrio → Vênus → Terra → Marte → Júpiter → Saturno → Urano → Netuno",
            "Sol → Marte → Mercúrio → Terra → Vênus → Júpiter → Saturno → Urano → Netuno",
            "Sol → Mercúrio → Terra → Vênus → Júpiter → Marte → Saturno → Urano → Netuno",
            "Sol → Terra → Marte → Vênus → Mercúrio → Júpiter → Saturno → Netuno → Urano"
        ],
        correct: 0
    },
    {
        question: "Qual planeta é conhecido como o 'planeta anão'?",
        answers: ["Plutão",
          "Marte",
          "Netuno",
          "Júpiter"],
        correct: 1
    },
];

const backgrounds = [
    './images/fundo.webp',
    './images/fundo01.webp',
    './images/fundo02.webp',
    './images/fundo03.webp',
    './images/fundo04.webp',
    './images/fundo05.webp',
    './images/fundo06.webp',
    './images/fundo07.webp',
    './images/fundo08.webp',
    './images/fundo09.webp',
    './images/fundo10.webp',
    './images/fundo11.webp'
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestion];
    
    // Alterar o fundo com base na fase atual
    document.body.style.backgroundImage = `url(${backgrounds[currentQuestion]})`;
    
    document.getElementById("question").innerText = question.question;
    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = ""; // Limpa as respostas anteriores

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });

    document.getElementById("next-button").style.display = currentQuestion < questions.length - 1 ? "block" : "none";
    document.getElementById("final-score-button").style.display = currentQuestion === questions.length - 1 ? "block" : "none";
}

function selectAnswer(selected) {
    const question = questions[currentQuestion];
    if (selected === question.correct) {
        score += 10;
        document.getElementById("score").innerText = score;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        updateProgressBar();
    } else {
        showFinalScore();
    }
}

function updateProgressBar() {
    const progress = ((currentQuestion / questions.length) * 100).toFixed(2);
    document.getElementById("progress").style.width = `${progress}%`;
}

function showFinalScore() {
    document.getElementById("question-box").innerHTML = `<h2>Pontuação Final: ${score}</h2>`;
    document.getElementById("restart-button").style.display = "block";
}

document.getElementById("next-button").onclick = loadQuestion;
document.getElementById("final-score-button").onclick = showFinalScore;
document.getElementById("restart-button").onclick = () => {
    currentQuestion = 0;
    score = 0;
    document.getElementById("score").innerText = score;
    document.getElementById("restart-button").style.display = "none";
    loadQuestion();
    updateProgressBar();
};

// Carrega a primeira pergunta
loadQuestion();
