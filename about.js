const header = document.querySelector('#mainMenu');

const menuButton = document.querySelector('.mobile.menu');

menuButton.addEventListener('click', () => {
  header.classList.toggle('menu-open');
});

const closeMenu = document.querySelector('#close');

closeMenu.addEventListener('click', () => {
  header.classList.remove('menu-open');
});

const menuLink = document.querySelectorAll('#menu ul li a');

menuLink.forEach((el) => {
  el.addEventListener('click', () => {
    header.classList.remove('menu-open');
  });
});
