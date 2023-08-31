const elLoader = document.querySelector('.js-loader');

window.addEventListener('load', () => {
  setTimeout(() => {
    elLoader.classList.add('loader-wrapper--none');
  }, 800);
});