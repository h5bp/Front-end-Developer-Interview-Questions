console.log(
  '%cA black belt is a white belt that didn\'t quit.',
  'color: #fff; font-size: 20px; text-shadow: 1px 1px 1px #000; font-family: serif;'
)

var navToggle = document.getElementById('navigation-toggle')
var nav = document.getElementById('navigation')

navToggle.addEventListener('click', function() {
  nav.classList.toggle('open')
})

window.addEventListener('resize', function() {
  if (document.width > 960) {
    // Remove `active` class if viewport shows full menu
    nav.classList.remove('active')
  } else {
    // Temporarily add class to prevent visible motion after resize
    nav.classList.add('no-motion')
    setTimeout(function () {
      nav.classList.remove('no-motion')
    }, 250);
  }
})
