const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const videos = document.querySelectorAll(".carousel-item video");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let index = 0;

function updateCarousel() {
    items.forEach((item, i) => {
        let offset = (i - index + items.length) % items.length;
        let video = item.querySelector("video");

        if (offset === 0) { 
            item.style.transform = "translateX(-200px) scale(0.8)";
            item.style.opacity = "0.5"; 
            if (video) video.pause();
        } else if (offset === 1) { 
            item.style.transform = "translateX(0px) scale(1)";
            item.style.opacity = "1"; 

            // Solo este video responde al mouse
            if (video) {
                video.addEventListener("mouseenter", () => video.play());
                video.addEventListener("mouseleave", () => video.pause());
            }
        } else if (offset === 2) { 
            item.style.transform = "translateX(200px) scale(0.8)";
            item.style.opacity = "0.5"; 
            if (video) video.pause();
        } else { 
            item.style.transform = "translateX(600px) scale(0.6)";
            item.style.opacity = "0"; 
            if (video) video.pause();
        }
    });
}

function moveNext() {
    index = (index + 1) % items.length;
    updateCarousel();
}

function movePrev() {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
}

nextButton.addEventListener("click", moveNext);
prevButton.addEventListener("click", movePrev);

updateCarousel();
