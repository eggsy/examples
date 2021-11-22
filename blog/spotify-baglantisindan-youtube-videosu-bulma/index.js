const SpotifyWebApi = require("spotify-web-api-node");
const SpotifyToYouTube = require("spotify-to-youtube");

// Panelden alınan bilgileri değişkenlere ata
const clientId = "838383u288l12an898213eg8829gsy22";
const clientSecret = "n2234e19239ad23189am237283sın333";

// Yeni bir SpotifyWebApi örneği (instance) oluştur
const spotifyApi = new SpotifyWebApi({
  clientId,
  clientSecret,
});

// Asenkron işlemler için asenkron bir fonksiyon
async function main() {
  // Spotify API'a ulaşıp bir erişim anahtarı iste
  await spotifyApi.clientCredentialsGrant().then(({ body }) => {
    const accessToken = body.access_token;
    spotifyApi.setAccessToken(accessToken);
  });

  // Bir SpotifyToYoutube örneği oluştur
  const spotifyToYoutube = SpotifyToYouTube(spotifyApi);

  // Oluşturulan örneği kullanarak Spotify bağlantısından
  // YouTube bağlantısını al
  const trackId = await spotifyToYoutube(
    // Kendi yaptığımız Spotify bağlantısından ID'yi ayrıştırıcı
    // fonksiyonunu kullanarak ID'yi al
    idAyrictirici("https://open.spotify.com/track/1r9xUipOqoNwggBpENDsvJ")
  );

  // Sonucu YouTube bağlantısı olarak döndür
  return console.log(`https://youtu.be/${trackId}`);
}

main();

function idAyrictirici(url) {
  return new URL(url).pathname.split("/")[2];
}
const SpotifyWebApi = require("spotify-web-api-node");
const SpotifyToYouTube = require("spotify-to-youtube");

// Panelden alınan bilgileri değişkenlere ata
const clientId = "863ee61cc6d04c3280cb42255511da48";
const clientSecret = "e249928bd5ad47e194f7097f201e32f1";

// Yeni bir SpotifyWebApi örneği (instance) oluştur
const spotifyApi = new SpotifyWebApi({
  clientId,
  clientSecret,
});

// Asenkron işlemler için asenkron bir fonksiyon
async function main() {
  // Spotify API'a ulaşıp bir erişim anahtarı iste
  await spotifyApi.clientCredentialsGrant().then(({ body }) => {
    const accessToken = body.access_token;
    spotifyApi.setAccessToken(accessToken);
  });

  // Bir SpotifyToYoutube örneği oluştur
  const spotifyToYoutube = SpotifyToYouTube(spotifyApi);

  // Oluşturulan örneği kullanarak Spotify bağlantısından
  // YouTube bağlantısını al
  const trackId = await spotifyToYoutube(
    // Kendi yaptığımız Spotify bağlantısından ID'yi ayrıştırıcı
    // fonksiyonunu kullanarak ID'yi al
    idAyrictirici("https://open.spotify.com/track/1r9xUipOqoNwggBpENDsvJ")
  );

  // Sonucu YouTube bağlantısı olarak döndür
  return console.log(`https://youtu.be/${trackId}`);
}

main();

function idAyrictirici(url) {
  return new URL(url).pathname.split("/")[2];
}
