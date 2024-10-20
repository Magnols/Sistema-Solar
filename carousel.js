const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;
const intervalTime = 5000; // 10 segundos
let autoSlide;

const showSlide = (index) => {
  const totalWidth = slides.clientWidth * index;
  slides.scrollTo({
    left: totalWidth,
    behavior: 'smooth'
  });
};

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
};

nextButton.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prevButton.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

const startAutoSlide = () => {
  autoSlide = setInterval(nextSlide, intervalTime);
};

const resetAutoSlide = () => {
  clearInterval(autoSlide);
  startAutoSlide();
};

// Iniciar o carrossel automaticamente
startAutoSlide();
