// SCROLL MOBILE SECTION 2 //
const scrollers = document.querySelectorAll('.slide-mobile');

if (!window.matchMedia('prefers-reduced-motion: reduce').matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute('data-animated', true);
  });
}

// MENU RESPONSIVO //
document.getElementById('menu-toggle').addEventListener('click', function () {
  this.classList.toggle('active');
});

const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu-b');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});
// slides //

const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slide img').length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
let autoSlideInterval;

// Atualiza a posição dos slides e os indicadores ativos
function updateSlidePosition() {
  slides.style.transform = `translateX(-${+currentIndex * 100}%)`;
  updateActiveDot();
}
console.log(slides, { images });

// Atualiza o indicador ativo (os "pontos")
function updateActiveDot() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Avança para o próximo slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % images;
  updateSlidePosition();
}

// Volta para o slide anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + images) % images;
  updateSlidePosition();
}

// Configura o temporizador automático
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos
}

// Para o temporizador automático
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Adiciona evento para os botões de navegação
nextButton.addEventListener('click', () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

prevButton.addEventListener('click', () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

// Adiciona evento para os indicadores
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    stopAutoSlide();
    currentIndex = index;
    updateSlidePosition();
    startAutoSlide();
  });
});

// Inicia o slide automático ao carregar a página
startAutoSlide();
