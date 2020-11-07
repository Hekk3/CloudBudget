// video fun

const playVideo = document.querySelector('.video__play');
const video = document.querySelector('.video__video');
const videoText = document.querySelector('.video__funny');

playVideo.addEventListener('click', () => {
  playVideo.classList.toggle('video__play--active');
  video.classList.toggle('video__video--active');
  videoText.classList.toggle('video__funny--active');

  setTimeout(() => {
    playVideo.classList.remove('video__play--active'),
    video.classList.remove('video__video--active'),
    videoText.classList.remove('video__funny--active')
  }, 10000)
})

// burger menu
const nav = document.querySelector('.header__nav');
const burger = document.querySelector('.burger');


burger.addEventListener('click', () => {
  nav.classList.toggle('header__nav--active');
  burger.classList.toggle('burger--active');
});