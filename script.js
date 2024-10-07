function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.width = ".1px";
        star.style.height = ".1px";
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        container.appendChild(star);
    }
}

createStars();

// Informações sobre os planetas
const planetInfo = {
    mercury: {
        name: "Mercúrio",
        info: "Mercúrio é o planeta mais próximo do Sol e o menor do Sistema Solar."
    },
    venus: {
        name: "Vênus",
        info: "Vênus é o segundo planeta do Sistema Solar e tem uma atmosfera extremamente quente."
    },
    earth: {
        name: "Terra",
        info: "A Terra é o terceiro planeta do Sistema Solar e o único conhecido por abrigar vida."
    },
    moon: {
        name: "Lua",
        info: "A Lua é o único satélite natural da Terra."
    },
    mars: {
        name: "Marte",
        info: "Marte é conhecido como o planeta vermelho e pode ter abrigado água líquida no passado."
    },
    jupiter: {
        name: "Júpiter",
        info: "Júpiter é o maior planeta do Sistema Solar e tem uma Grande Mancha Vermelha, uma enorme tempestade."
    },
    saturn: {
        name: "Saturno",
        info: "Saturno é conhecido por seus anéis icônicos, compostos por gelo e rochas."
    },
    uranus: {
        name: "Urano",
        info: "Urano é o sétimo planeta e tem um eixo de rotação extremamente inclinado."
    },
    neptune: {
        name: "Netuno",
        info: "Netuno é o oitavo planeta e é conhecido por seus ventos extremamente rápidos."
    },
    pluto: {
        name: "Plutão",
        info: "Plutão é um planeta anão e foi anteriormente considerado o nono planeta do Sistema Solar."
    }
};

// Função para exibir informações dos planetas
function showPlanetInfo(planet) {
    const { name, info } = planetInfo[planet];
    alert(`${name}: ${info}`);
}

// Função para abrir o modal com informações
function openModal(planetName, planetInfo) {
    document.getElementById("planetModal").style.display = "flex";
    document.getElementById("planetName").textContent = planetName;
    document.getElementById("planetInfo").textContent = planetInfo;
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("planetModal").style.display = "none";
}

// Fechar o modal quando clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("planetModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

