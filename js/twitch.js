const clientId = 'k9dj883odk0sitw3kkqjwbo4jynm6b';
const clientSecret = 'o5p43deyedd1dsvvneq5i6i8e09asr';
const channelName = 'JapaG1';

    async function getAccessToken() {
        const response = await fetch('https://id.twitch.tv/oauth2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`});
            const data = await response.json();
            return data.access_token;
        }

    async function checkIfLive(channelName, accessToken) {
        const response = await fetch(`https://api.twitch.tv/helix/streams?user_login=${channelName}`, {
            headers: {
                'Client-ID': clientId,
                'Authorization': `Bearer ${accessToken}`
            }
        });
        const data = await response.json();
        return data.data.length > 0;
    }

    async function initialize() {
        const accessToken = await getAccessToken();
        const isLive = await checkIfLive(channelName, accessToken);

        if (isLive) {
            new Twitch.Embed("twitch-embed", {
                width: '90%',
                height: '100%',
                channel: channelName
            });
        } else {
            new Twitch.Embed("twitch-embed", {
                width: '90%',
                height: '100%',
                channel: channelName
            });
        }
    }

    initialize();