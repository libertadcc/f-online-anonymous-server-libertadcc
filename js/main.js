'use strict';

const navTrigger = document.querySelector('.nav-trigger');
const nav = document.querySelector('.nav');
const navClose = document.querySelector('.nav-close');

const show = () => {
  nav.classList.remove('hidden');
  navTrigger.classList.add('hidden');
}

const hide = () => {
  nav.classList.add('hidden');
  navTrigger.classList.remove('hidden');

}

navTrigger.addEventListener('click', show);
navClose.addEventListener('click', hide);