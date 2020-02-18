let i = 0;

function button() {
    const hamburgerBtn = document.querySelector('.hamburger__wrapper');
    const menuWrapper = document.querySelector('.menu__wrapper')
    const searchBtn = document.querySelector('.btn__search')
    const searchWrapper = document.querySelector('.navbar__form')

    hamburgerBtn.addEventListener('click', () => {
        menuWrapper.classList.toggle('menu__wrapper--active');
    });

    searchBtn.addEventListener('click', () => {
        searchWrapper.classList.toggle('navbar__form--active')
    })
}

button();

function toggleClass() {
    const caruselElements = document.querySelectorAll('.carusel__item');
    for (let element of caruselElements) {
        element.classList.remove('carusel__item--active');
    }
    caruselElements[i].classList.add('carusel__item--active');
};

function carusel() {
    if (i >= 0 && i < 2) {
        i++;
        toggleClass();
    } else if (i >= 2) {
        i = 0;
        toggleClass();
    }
}

// setInterval(function () {
//     console.log('dupa');
//     carusel();;
// }, 4000);

function caruselButton() {
    const btnLeft = document.querySelector('.btn__carusel--left');
    const btnRight = document.querySelector('.btn__carusel--right')

    btnLeft.addEventListener('click', () => {
        if (i >= 1 && i <= 2) {
            i--;
            toggleClass();
        } else {
            i = 2;
            toggleClass();
        }
    });

    btnRight.addEventListener('click', () => {
        if (i >= 0 && i <= 1) {
            i++;
            toggleClass();
        } else {
            i = 0;
            toggleClass();
        }
    });
}

caruselButton();