const body = document.body
const slides = document.querySelectorAll('.slide')
const buttonLeft = document.getElementById('left')
const buttonRight = document.getElementById('right')

let activeSlide = 0

setBodyBackground()

buttonRight.addEventListener('click', ()=>{
    activeSlide++
    activeSlide >  slides.length - 1 ?  activeSlide = 0 : null
    setBodyBackground()
    setActiveSlide()
})
buttonLeft.addEventListener('click', ()=>{
    activeSlide--
    activeSlide <  0 ?  activeSlide = slides.length - 1 : null
    setBodyBackground()
    setActiveSlide()
})


function setBodyBackground() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide(){
    slides.forEach(slide => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}

