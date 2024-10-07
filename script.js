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
  
  const planets = document.querySelectorAll(".mercury, .venus, .earth, .mars, .jupiter, .saturn, .uranus, .neptune, .pluto");
  const infoDiv = document.querySelector(".info");
  
  planets.forEach(planet => {
    planet.addEventListener("click", () => {
      const infoFile = planet.getAttribute("data-info");
      fetch(infoFile)
        .then(response => response.text())
        .then(data => {
          infoDiv.innerHTML = data;
          infoDiv.style.display = "block";
        })
        .catch(error => {
          console.error("Error fetching info file:", error);
        });
    });
  });
  
  document.addEventListener("click", event => {
    if (!event.target.classList.contains("planet")) {
      infoDiv.style.display = "none";
    }
  });