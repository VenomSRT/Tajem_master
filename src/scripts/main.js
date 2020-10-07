'use strict';

// Video playback controls

function startVideo() {
  document.querySelector('#videoblock__poster').style.visibility = 'hidden';
  document.querySelector('.videoblock__container').play();
}

function stopVideo() {
  document.querySelector('.videoblock__container').pause();
  document.querySelector('#videoblock__poster').style.visibility = 'visible';
}

// Main-menu toggle controls

const menuNode = document.querySelector('.floating-menu');
const burgerNode = document.querySelector('.header__burger-menu');

function showMenu() {
  menuNode.style.visibility = 'visible';
  burgerNode.style.visibility = 'hidden';
}

function hideMenu() {
  menuNode.style.visibility = 'hidden';
  burgerNode.style.visibility = 'visible';
}

// Click events setup

document.querySelector('.videoblock__button')
  .addEventListener('click', startVideo, false);

document.querySelector('.videoblock__container')
  .addEventListener('click', stopVideo, false);

if (window.innerWidth < 630) {
  document.querySelectorAll('.floating-menu__menu-link')
    .forEach(link => link.addEventListener('click', hideMenu, false));

  document.querySelector('.header__burger-menu')
    .addEventListener('click', showMenu, false);
}

// Window size listener

window.addEventListener('resize', () => {
  if (window.innerWidth > 629) {
    showMenu();

    document.querySelectorAll('.floating-menu__menu-link')
      .forEach(link => link.removeEventListener('click', hideMenu, false));

    document.querySelector('.header__burger-menu')
      .removeEventListener('click', showMenu, false);
  } else {
    hideMenu();

    document.querySelectorAll('.floating-menu__menu-link')
      .forEach(link => link.addEventListener('click', hideMenu, false));

    document.querySelector('.header__burger-menu')
      .addEventListener('click', showMenu, false);
  }
});
