
const imageSources = [
  'img1.jpg',
  'img2.jpg',
]

const timeOut = 200 
const loop = false //true = door, false = stopt
let images = Array.from(document.querySelectorAll('.image-carousel img')) 
let img 
function carousel () {
  if (img) img.classList.toggle('current')
  img = images.shift() //eerste element van de array - daarna is de array 1 korter (20 ipv 21)
  img.classList.toggle('current') //voor het plaatje dat je net hebt gepakt
  if (loop && !images.length) {
    images = Array.from(document.querySelectorAll('.image-carousel img'))
  }
  if (images.length) setTimeout(carousel, timeOut)
}

window.onload = () => {
  imageSources.forEach(src => {
    const img = new Image()
    // preloaden images, zelf even opzoeken
  })
  setTimeout(carousel, timeOut)
}


// const hamburgerIcon = document.querySelector('.test');
// const menu = document.querySelector('.menu');


// document.addEventListener('DOMContentLoaded', function () {
//   hamburgerIcon.addEventListener('click', function () {
//     console.log('Hamburger icon clicked');
//     menu.classList.toggle('active');
//     console.log('Menu toggled');
//   });
// });

