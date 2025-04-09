document.querySelectorAll('.contenedor-modal .overlay').forEach((el) => {
	el.addEventListener('click', function (ev) {
		ev.stopPropagation();
		this.parentNode.classList.add('active');
	});
});

document.querySelectorAll('.contenedor-modal ').forEach((el) => {
	el.addEventListener('click', function (ev) {
		this.classList.remove('active');
	});
});

const videoContainer = document.querySelectorAll('.video-container .video video');
const popup = document.querySelector('.popup-video');
const popupVideo = document.querySelector('.popup-video video');
const closeBtn = document.querySelector('.popup-video span');

videoContainer.forEach(video => {
    video.addEventListener('click', () => {
        popup.style.display = 'block';
        popupVideo.src = video.src;
    });
});

closeBtn.onclick = () => {
    popup.style.display = 'none';
    popupVideo.pause();
}
