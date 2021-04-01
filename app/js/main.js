// Встроенные проигрыватели YouTube и параметры проигрывателей
// https://developers.google.com/youtube/player_parameters

const videoBtn = document.querySelector('.play-link');
const videoBox = document.querySelector('.video_box');

videoBtn.addEventListener('click', playVideo);

function playVideo() {
    const iframe = document.createElement('iframe');
    iframe.className = 'iframe';
    iframe.src = 'https://www.youtube.com/embed/736fiBMtADg?autoplay=1';
    videoBox.replaceWith(iframe); // Заменяем на iframe который созданим на месте фото.
    // videoBox.append(iframe);
};