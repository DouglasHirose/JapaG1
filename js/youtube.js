document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let index = 0;

    function showItem(index) {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function () {
        index = (index > 0) ? index - 1 : items.length - 1;
        showItem(index);
    });

    nextButton.addEventListener('click', function () {
        index = (index < items.length - 1) ? index + 1 : 0;
        showItem(index);
    });

    // Opcional: Mudar de vídeo automaticamente a cada 5 segundos
    setInterval(function () {
        index = (index < items.length - 1) ? index + 1 : 0;
        showItem(index);
    }, 5000);
});
