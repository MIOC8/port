const container = document.querySelector('.container');
window.addEventListener('scroll', function (e) {
    if (scrollY >= 40) {
        container.classList.add('container__active')
    }
    else {
        container.classList.remove('container__active')
    }
})
