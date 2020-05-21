const $burger = document.querySelector('.burger')
const $nav = document.querySelector('.nav-links')
// const $navLinks = $nav.querySelectorAll('li')
const $navLinks = document.querySelectorAll('.nav-links li')

$burger.addEventListener('click', () => {
  
// Toggle Nav
  $nav.classList.toggle('nav-active');
  
// Animate Links
  $navLinks.forEach(($link, index) => {
    if ($link.style.animation) {
      $link.style.animation = null;
    } else {
      $link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + .1}s`;
    }
  })

// Burger animation
  $burger.classList.toggle('spin');
})