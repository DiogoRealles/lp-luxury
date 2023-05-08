export default function navbar() {
  const btnMobile = document.querySelector('#btn__mobile');
  function toggleMenu(e) {
    e.preventDefault();
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
  }
  btnMobile.addEventListener('click', toggleMenu);
}