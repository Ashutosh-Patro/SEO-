let card = document.querySelectorAll(".slider-card")
let circle = document.querySelectorAll(".circle")
let price = document.querySelectorAll(".plan")
let le = document.querySelectorAll('.le')
let btn = document.querySelectorAll('.price-btn')

// let i = 0;

// setInterval(() => {
//     if (i < card.length - 1) {
//         card[i].classList.remove("current-card")
//         circle[i].classList.remove("activated")
//         i++
//         card[i].classList.add("current-card")
//         circle[i].classList.add("activated")
//     }
//     else {
//         card[i].classList.remove("current-card")
//         circle[i].classList.remove("activated")
//         i = 0
//         card[i].classList.add("current-card")
//         circle[i].classList.add("activated")
//     }
// }, 1500)

price.forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.firstElementChild.firstElementChild.style.color = "white"
    })
})
price.forEach((card) => {
    card.addEventListener("mouseout", () => {
        card.firstElementChild.firstElementChild.style.color = "#6f77f1"
    })
})

price.forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.lastElementChild.style.backgroundColor = "#FAD725"
    })
})
price.forEach((button) => {
    button.addEventListener("mouseout", () => {
        button.lastElementChild.style.backgroundColor = "white"
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