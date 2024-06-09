let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const slideWidth = slides.children[0].clientWidth;
    slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function autoSlide() {
    moveSlide(1);
    setTimeout(autoSlide, 3000); // Muda a imagem a cada 3 segundos
}

// Iniciar o carrossel automático quando a página for carregada
document.addEventListener('DOMContentLoaded', (event) => {
    autoSlide();
});
