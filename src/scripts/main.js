'use strict';

function startVideo(event) {
  const playButton = event.target;

  playButton.style.visibility = 'hidden';
  playButton.closest('#videoblock__poster').style.visibility = 'hidden';
  playButton.closest('#videoblock__overlay').style.visibility = 'hidden';
  playButton.closest('#presentation-section').firstElementChild.play();
}

function stopVideo(event) {
  const video = event.target;

  video.pause();
  document.querySelector('#videoblock__overlay').style.visibility = 'visible';
  document.querySelector('.videoblock__button').style.visibility = 'visible';
}

document.addEventListener('click', (event) => {
  if (event.target.className === 'videoblock__button') {
    startVideo(event);
  }

  if (event.target.className === 'videoblock__container') {
    stopVideo(event);
  }
});
