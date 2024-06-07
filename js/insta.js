const accessToken = '2bb5ec3464ec901f7f6efc54e2a4c9db';
        const userId = 'douglas_hirose'; // Este é o ID do usuário do Instagram que você deseja acessar

        fetch(`https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=${accessToken}`)
            .then(response => response.json())
            .then(data => {
                const photosContainer = document.getElementById('instagram-photos');
                data.data.forEach(photo => {
                    if (photo.media_type === 'IMAGE' || photo.media_type === 'CAROUSEL_ALBUM') {
                        const img = document.createElement('img');
                        img.src = photo.media_url;
                        img.alt = photo.caption || 'Instagram Photo';
                        photosContainer.appendChild(img);
                    }
                });
            })
            .catch(error => console.error('Erro ao buscar fotos do Instagram:', error));