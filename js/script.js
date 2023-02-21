let card = document.querySelectorAll(".slider-card")
let circle = document.querySelectorAll(".circle")
let price = document.querySelectorAll(".plan")
let learnMore = document.querySelectorAll('.choose-card-items')

price.forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.firstElementChild.firstElementChild.style.color = "white"
        card.lastElementChild.style.backgroundColor = "#FAD725"
    })
})
price.forEach((card) => {
    card.addEventListener("mouseout", () => {
        card.firstElementChild.firstElementChild.style.color = "#6f77f1"
        card.lastElementChild.style.backgroundColor = "white"
    })
})

learnMore.forEach((learnBtn) => {
    learnBtn.addEventListener("mouseover", () => {
        learnBtn.lastElementChild.lastElementChild.style.backgroundColor = "#FAD725"
        learnBtn.lastElementChild.lastElementChild.style.color = "black"
    })
})
learnMore.forEach((learnBtn) => {
    learnBtn.addEventListener("mouseout", () => {
        learnBtn.lastElementChild.lastElementChild.style.backgroundColor = "white"
        learnBtn.lastElementChild.lastElementChild.style.color = "#FAD725"
    })
})

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