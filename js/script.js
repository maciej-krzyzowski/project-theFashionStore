// BUTTON 

const button = () => {
    const hamburgerBtn = document.querySelector('.hamburger__wrapper');
    const menuWrapper = document.querySelector('.menu__wrapper');
    const searchBtn = document.querySelector('.btn__search');
    const searchWrapper = document.querySelector('.navbar__form');

    hamburgerBtn.addEventListener('click', () => {
        menuWrapper.classList.toggle('menu__wrapper--active');
    });

    searchBtn.addEventListener('click', () => {
        searchWrapper.classList.toggle('navbar__form--active')
    });
};

button();

// CARUSEL 

const carusel = () => {
    let i = 0;
    const carusel = document.querySelector('.carusel__wrapper');
    const slides = Array.from(carusel.children);
    const nextButton = document.querySelector('.btn__carusel--right');
    const prevButton = document.querySelector('.btn__carusel--left');
    const slideWidth = slides[0].getBoundingClientRect().width;

    const slidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(slidePosition);

    const changeRight = () => {
        carusel.style.transform = carusel.style.transform + 'translateX(-100vw)';
        i++;
        if (i === slides.length) {
            carusel.style.transform = 'translate(0)';
            i = 0;
        };
    };

    const changeLeft = () => {
        carusel.style.transform = carusel.style.transform + 'translateX(100vw)';
        i--;
        if (i === -1) {
            carusel.style.transform = 'translate(-' + (slides.length - 1) * 100 + 'vw)';
            i = 2;
        };
    };

    const allClearInterval = () => {
        for (var i = 1; i < 99999; i++) {
            window.clearInterval(i);
        }
    }

    const interval = () => setInterval(() => {
        changeRight();
    }, 3500);

    interval();

    nextButton.addEventListener('click', () => {
        allClearInterval();
        changeRight();
        interval();
    });

    prevButton.addEventListener('click', () => {
        allClearInterval();
        changeLeft();
        interval();
    });
};

carusel();

// SMALLCARUSEL 

const smallCarusel = (carusel, buttonWrapper) => {
    let i = 0;
    const slides = Array.from(carusel.children)
    const nextButton = buttonWrapper.querySelector('.btn__small-carusel--right');
    const prevButton = buttonWrapper.querySelector('.btn__small-carusel--left');
    const active = 'small-carusel__active';

    nextButton.addEventListener('click', () => {
        if (i == 0 || i < slides.length - 1) {
            slides[i].classList.remove(active);
            i++;
            slides[i].classList.add(active);
        } else {
            slides[i].classList.remove(active);
            i = 0;
            slides[i].classList.add(active);
        }
    });

    prevButton.addEventListener('click', () => {
        if (i > 0 && i <= slides.length - 1) {
            slides[i].classList.remove(active);
            i--;
            slides[i].classList.add(active);
        } else {
            slides[i].classList.remove(active);
            i = slides.length - 1;
            slides[i].classList.add(active);
        }
    });
}

const menCarusel = () => {
    const carusel = document.querySelector('.small-carusel-men');
    const menButtonWrapper = document.querySelector('.products__buttons--men');

    smallCarusel(carusel, menButtonWrapper);
};

const womenCarusel = () => {

    const carusel = document.querySelector('.small-carusel-women');
    const womenButtonWrapper = document.querySelector('.products__buttons--women');

    smallCarusel(carusel, womenButtonWrapper);
};

const cardsCarusel = () => {
    const carusel = document.querySelector('.small-carusel-cards');
    const cardsButtonWrapper = document.querySelector('.cards__button');

    smallCarusel(carusel, cardsButtonWrapper);
};

menCarusel();
womenCarusel();
cardsCarusel();

var str = 'A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A';

for (var v of str) {
    console.log(v);
}
// "A"
// "\uD835\uDC68"
// "B"
// "\uD835\uDC69"
// "C"
// "\uD835\uDC6A"