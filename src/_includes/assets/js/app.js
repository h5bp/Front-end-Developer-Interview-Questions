console.log(
  '%cA black belt is a white belt that didn\'t quit.',
  'color: #fff; font-size: 20px; text-shadow: 1px 1px 1px #000; font-family: serif;'
)

var navToggle = document.getElementById('navigation-toggle')
var navQuestions = document.getElementById('navigation-questions')

navToggle.addEventListener('click', function() {
  if (navQuestions.classList.contains('active')) {
    navQuestions.classList.remove('active')
  } else {
    navQuestions.classList.add('active')
  }
})

window.addEventListener('resize', function() {
  if (document.width > 960) {
    // Remove `active` class if viewport shows full menu
    navQuestions.classList.remove('active')
  } else {
    // Temporarily add class to prevent visible motion after resize
    navQuestions.classList.add('no-motion')
    setTimeout(function () {
      navQuestions.classList.remove('no-motion')
    }, 250);
  }
})
