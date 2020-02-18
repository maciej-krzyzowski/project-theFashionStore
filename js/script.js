const button = () => {
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

const smallCarusel = () => {

    const menSmallCarusel = () => {
        const caruselMen = document.querySelector('.small-carusel-men');
        const slidesMen = Array.from(caruselMen.children)
        const menButtonWrapper = document.querySelector('.products__buttons--men')
        const menNextButton = menButtonWrapper.querySelector('.btn__small-carusel--right');
        const menPrevButton = menButtonWrapper.querySelector('.btn__small-carusel--left');
        const menActive = 'small-carusel__men--active';
        let i = 0;

        menNextButton.addEventListener('click', () => {
            if (i == 0 || i < slidesMen.length - 1) {
                slidesMen[i].classList.remove(menActive);
                i++;
                slidesMen[i].classList.add(menActive);
            } else {
                slidesMen[i].classList.remove(menActive);
                i = 0;
                slidesMen[i].classList.add(menActive);
            }
        });

        menPrevButton.addEventListener('click', () => {
            if (i > 0 && i <= slidesMen.length - 1) {
                slidesMen[i].classList.remove(menActive);
                i--;
                slidesMen[i].classList.add(menActive);
            } else {
                slidesMen[i].classList.remove(menActive);
                i = slidesMen.length - 1;
                slidesMen[i].classList.add(menActive);
            }
        });
    };

    const womenSmallCarusel = () => {

        const caruselWomen = document.querySelector('.small-carusel-women');
        const slidesWomen = Array.from(caruselWomen.children)
        const womenButtonWrapper = document.querySelector('.products__buttons--women')
        const womenNextButton = womenButtonWrapper.querySelector('.btn__small-carusel--right');
        const womenPrevButton = womenButtonWrapper.querySelector('.btn__small-carusel--left');
        const womenActive = 'small-carusel__women--active';
        let i = 0;

        womenNextButton.addEventListener('click', () => {
            if (i == 0 || i < slidesWomen.length - 1) {
                slidesWomen[i].classList.remove(womenActive);
                i++;
                slidesWomen[i].classList.add(womenActive);
            } else {
                slidesWomen[i].classList.remove(womenActive);
                i = 0;
                slidesWomen[i].classList.add(womenActive);
            }
        });

        womenPrevButton.addEventListener('click', () => {
            if (i > 0 && i <= slidesWomen.length - 1) {
                slidesWomen[i].classList.remove(womenActive);
                i--;
                slidesWomen[i].classList.add(womenActive);
            } else {
                slidesWomen[i].classList.remove(womenActive);
                i = slidesWomen.length - 1;
                slidesWomen[i].classList.add(womenActive);
            }
        });
    };

    const cardsSmalCarusel = () => {
        const slidesCards = document.querySelectorAll('.small-carusel__cards');
        console.log(slidesCards.length);
        const cardsButtonWrapper = document.querySelector('.cards__button');
        const cardsNextButton = cardsButtonWrapper.querySelector('.btn__small-carusel--right');
        const cardsPrevButton = cardsButtonWrapper.querySelector('.btn__small-carusel--left');
        const cardsActive = 'small-carusel__cards--active';
        let i = 0;

        cardsNextButton.addEventListener('click', () => {
            if (i == 0 || i < slidesCards.length - 1) {
                slidesCards[i].classList.remove(cardsActive);
                i++;
                slidesCards[i].classList.add(cardsActive);
            } else {
                slidesCards[i].classList.remove(cardsActive);
                i = 0;
                slidesCards[i].classList.add(cardsActive);
            }
        });

        cardsPrevButton.addEventListener('click', () => {
            if (i > 0 && i <= slidesCards.length - 1) {
                slidesCards[i].classList.remove(cardsActive);
                i--;
                slidesCards[i].classList.add(cardsActive);
            } else {
                slidesCards[i].classList.remove(cardsActive);
                i = slidesCards.length - 1;
                slidesCards[i].classList.add(cardsActive);
            }
        });
    }

    menSmallCarusel();
    womenSmallCarusel();
    cardsSmalCarusel();
}

smallCarusel();
