const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-links')

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    burger.classList.toggle('active')
})

document.querySelectorAll(".nav-link").forEach((n) => {
    n.addEventListener('click', () => {
        burger.classList.remove('active')
        navLinks.classList.remove('active')
    })
});