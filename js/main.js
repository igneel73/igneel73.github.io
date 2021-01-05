// hamburger interaction for nav
const ham = document.querySelector('.ham');
const nav = document.querySelector('.nav');
let menuOpen = false;

ham.addEventListener('click', () => {
  if (!menuOpen) {
    nav.classList.add('open');
    ham.classList.add('open');
    menuOpen = true;
  } else {
    nav.classList.remove('open');
    ham.classList.remove('open');
    menuOpen = false;
  }
});

// scroll on clicking scroll button
const scrollButton = document.querySelector('.scroll');

scrollButton.addEventListener('click', () => {
  window.scroll(0, window.innerHeight);
});
