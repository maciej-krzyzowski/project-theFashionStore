let i = 0;

function hamburgerButton() {
    const hamburgerBtn = document.querySelector('.wrapper--hamburger');
    const hamburgerToggle = document.querySelector('.menu__element')

    hamburgerBtn.addEventListener('click', () => {
        hamburgerToggle.classList.toggle('menu__element--active');
    });
}

hamburgerButton();

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

setInterval(function () {
    carusel();;
}, 4000);

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