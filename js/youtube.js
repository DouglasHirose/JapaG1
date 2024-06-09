// script.js
fetch('videos.json')
    .then(response => response.json())
    .then(data => {
        const videoData = data;
        const carouselInner = document.getElementById('carouselInner');

        videoData.forEach(video => {
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${video.id}`;
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            iframe.width = "100%";
            iframe.height = "400";
            carouselInner.appendChild(iframe);
        });

        let currentIndex = 0;
        let autoPlayInterval;

        function startAutoPlay() {
            autoPlayInterval = setInterval(() => {
                if (currentIndex < videoData.length - 1) {
                    currentIndex++;
                } else {
                    currentIndex = 0;
                }
                updateCarousel();
            }, 5000); // 5000ms = 5 segundos
        }
        
        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
        }

        document.getElementById('prevBtn').addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            if (currentIndex < videoData.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });

        function updateCarousel() {
            const offset = -currentIndex * 100;
            carouselInner.style.transform = `translateX(${offset}%)`;
            updateButtons();
        }

        function updateButtons() {
            document.getElementById('prevBtn').disabled = currentIndex === 0;
            document.getElementById('nextBtn').disabled = currentIndex === videoData.length - 1;
        }

        function onPlayerStateChange(event) {
            if (event.data === YT.PlayerState.PLAYING) {
                stopAutoPlay();
            } else {
                startAutoPlay();
            }
        }
        
        function onYouTubeIframeAPIReady() {
            const iframes = document.querySelectorAll('iframe');
            iframes.forEach((iframe, index) => {
                new YT.Player(iframe, {
                    events: {
                        'onStateChange': onPlayerStateChange
                    }
                });
            });
        }
        
        // Carregar a API do iframe do YouTube
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
        // Inicializa o estado dos botões
        updateButtons();
        startAutoPlay();
    })
    .catch(error => console.error('Erro ao carregar os vídeos:', error));
