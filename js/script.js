// let i = 0;

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

// function toggleClass() {
//     const caruselElements = document.querySelectorAll('.carusel__item');
//     for (let element of caruselElements) {
//         element.classList.remove('carusel__item--active');
//     }
//     caruselElements[i].classList.add('carusel__item--active');
// };

// function carusel() {
//     if (i >= 0 && i < 2) {
//         i++;
//         toggleClass();
//     } else if (i >= 2) {
//         i = 0;
//         toggleClass();
//     }
// }

// // setInterval(function () {
// //     console.log('dupa');
// //     carusel();;
// // }, 4000);

// function caruselButton() {
//     const btnLeft = document.querySelector('.btn__carusel--left');
//     const btnRight = document.querySelector('.btn__carusel--right')

//     btnLeft.addEventListener('click', () => {
//         if (i >= 1 && i <= 2) {
//             i--;
//             toggleClass();
//         } else {
//             i = 2;
//             toggleClass();
//         }
//     });

//     btnRight.addEventListener('click', () => {
//         if (i >= 0 && i <= 1) {
//             i++;
//             toggleClass();
//         } else {
//             i = 0;
//             toggleClass();
//         }
//     });
// }

// caruselButton();

const carusel = () => {
    const carusel = document.querySelector('.carusel__wrapper')
    const slides = Array.from(carusel.children);
    const nextButton = document.querySelector('.btn__carusel--right');
    const prevButton = document.querySelector('.btn__carusel--left');
    let i = 0;

    const slideWidth = slides[0].getBoundingClientRect().width;

    const slidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    }
    slides.forEach(slidePosition);

    const changeRight = () => {
        carusel.style.transform = carusel.style.transform + 'translateX(-100vw)';
        i++;
        if (i === slides.length) {
            carusel.style.transform = 'translate(0)';
            i = 0
        }
    }
    const changeLeft = () => {
        carusel.style.transform = carusel.style.transform + 'translateX(100vw)';
        i--;
        if (i === -1) {
            carusel.style.transform = 'translate(-' + (slides.length - 1) * 100 + 'vw)';
            i = 2;
        }
    }

    const caruselInterval = () => {

        const allClearIterval = () => {
            for (var i = 1; i < 99999; i++)
                window.clearInterval(i);
        }

        allClearIterval();

        const interval = () => setInterval(() => {
            changeRight();
        }, 3000);

        interval();
    }

    caruselInterval();

    nextButton.addEventListener('click', () => {
        changeRight();
        caruselInterval();
    })

    prevButton.addEventListener('click', () => {
        changeLeft();
        caruselInterval();
    })
}

carusel();
