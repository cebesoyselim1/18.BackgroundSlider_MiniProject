let rightArrow = document.querySelector(".right-arrow");
let leftArrow = document.querySelector(".left-arrow");
let sliderImages = document.querySelectorAll(".slider-img");
let background = document.querySelector(".background");
let currentImg = 0;

rightArrow.addEventListener("click",sliderInc);
leftArrow.addEventListener("click",sliderDec);

function sliderInc(){
    currentImg++;
    if(currentImg >= sliderImages.length){
        currentImg = 0;
    }
    background.style.backgroundImage = `url('img/${currentImg + 1}.jpg')`;

    sliderImages.forEach((img) => img.classList.remove("active"));
    sliderImages[currentImg].classList.add("active");
}

function sliderDec(){
    currentImg--;
    if(currentImg < 0){
        currentImg = sliderImages.length - 1;
    }
    background.style.backgroundImage = `url('img/${currentImg + 1}.jpg')`;

    sliderImages.forEach((img) => img.classList.remove("active"));
    sliderImages[currentImg].classList.add("active");
}