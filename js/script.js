let searchBar = document.querySelector("#search-bar")
let card = document.querySelectorAll(".slider-card")

function openSearch() {
    if (searchBar.classList.contains('hide')) {
        searchBar.classList.remove('hide')
    }
    else {
        searchBar.classList.add('hide')
    }
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});