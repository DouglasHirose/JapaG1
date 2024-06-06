document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let index = 0;
    let intervalId;

    function showItem(index) {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function startCarousel() {
        intervalId = setInterval(function () {
            index = (index < items.length - 1) ? index + 1 : 0;
            showItem(index);
        }, 5000);
    }

    function stopCarousel() {
        clearInterval(intervalId);
    }

    prevButton.addEventListener('click', function () {
        index = (index > 0) ? index - 1 : items.length - 1;
        showItem(index);
    });

    nextButton.addEventListener('click', function () {
        index = (index < items.length - 1) ? index + 1 : 0;
        showItem(index);
    });

    startCarousel();

    // YouTube IFrame API
    function onYouTubeIframeAPIReady() {
        const players = [];
        document.querySelectorAll('iframe').forEach((iframe, i) => {
            const player = new YT.Player(iframe, {
                events: {
                    'onStateChange': function (event) {
                        if (event.data === YT.PlayerState.PLAYING) {
                            stopCarousel();
                        } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
                            startCarousel();
                        }
                    }
                }
            });
            players.push(player);
        });
    }

    if (window.YT && YT.Player) {
        onYouTubeIframeAPIReady();
    } else {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }
});
