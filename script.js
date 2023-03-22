let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header .navbar a')

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    if (navbar.classList.contains('active')) {
      navbar.style.display = 'none'
      navbar.classList.remove('active')
      menuIcon.classList.toggle('bx-x')
    }
  })
})
