const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const sliderLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidersLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

sliderLeft.style.top = `-${(slidersLength -1) * 100}vh`

upButton.addEventListener('click', () => changeSlider('up'))
downButton.addEventListener('click', () => changeSlider('down'))

const changeSlider = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex > slidersLength -1){
            activeSlideIndex =0 ;
        }
        
    }else if(direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slidersLength-1
        }
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    sliderLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}