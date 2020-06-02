// BUTTON

const button = () => {
    const hamburgerBtn = document.querySelector(".hamburger__wrapper");
    const menuWrapper = document.querySelector(".menu__wrapper");
    const searchBtn = document.querySelector(".btn__search");
    const searchWrapper = document.querySelector(".navbar__form");

    hamburgerBtn.addEventListener("click", () => {
        menuWrapper.classList.toggle("menu__wrapper--active");
    });

    searchBtn.addEventListener("click", () => {
        searchWrapper.classList.toggle("navbar__form--active");
    });
};

button();

// CARUSEL

const carusel = () => {
    const carusel = document.querySelector(".carusel__wrapper");
    const slides = Array.from(carusel.children);
    const nextButton = document.querySelector(".btn__carusel--right");
    const prevButton = document.querySelector(".btn__carusel--left");
    let i = 1;

    const changeSlide = (index) => {
        let prev = index - 1;
        if (prev === -1) prev = slides.length - 1;

        let next = index + 1;
        if (next === slides.length) next = 0;

        for (let k = 0; k < slides.length; k++) {
            slides[k].classList.remove("carusel__item--prev");
            slides[k].classList.remove("carusel__item--active");
            slides[k].classList.remove("carusel__item--next");
        }
        slides[prev].classList.add("carusel__item--prev");
        slides[i].classList.add("carusel__item--active");
        slides[next].classList.add("carusel__item--next");
    };

    const changeRight = () => {
        i++;
        if (i === slides.length) i = 0;
        changeSlide(i);
    };

    const changeLeft = () => {
        i--;
        if (i === -1) i = slides.length - 1;
        changeSlide(i);
    };

    const interval = () =>
        setInterval(() => {
            changeRight();
        }, 2500);

    interval();

    const clearInterval = () => {
        for (var i = 1; i < 99999; i++) {
            window.clearInterval(i);
        }
    };

    nextButton.addEventListener("click", () => {
        clearInterval();
        changeRight();
        interval();
    });

    prevButton.addEventListener("click", () => {
        clearInterval();
        changeLeft();
        interval();
    });
};

carusel();

// SMALLCARUSEL

const smallCarusel = (carusel, buttonWrapper) => {
    let i = 0;
    const slides = Array.from(carusel.children);
    const nextButton = buttonWrapper.querySelector(".btn__small-carusel--right");
    const prevButton = buttonWrapper.querySelector(".btn__small-carusel--left");
    const active = "small-carusel__active";

    nextButton.addEventListener("click", () => {
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

    prevButton.addEventListener("click", () => {
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
};

const menCarusel = () => {
    const carusel = document.querySelector(".small-carusel-men");
    const menButtonWrapper = document.querySelector(".products__buttons--men");

    smallCarusel(carusel, menButtonWrapper);
};

const womenCarusel = () => {
    const carusel = document.querySelector(".small-carusel-women");
    const womenButtonWrapper = document.querySelector(".products__buttons--women");

    smallCarusel(carusel, womenButtonWrapper);
};

const cardsCarusel = () => {
    const carusel = document.querySelector(".small-carusel-cards");
    const cardsButtonWrapper = document.querySelector(".cards__button");

    smallCarusel(carusel, cardsButtonWrapper);
};

menCarusel();
womenCarusel();
cardsCarusel();
