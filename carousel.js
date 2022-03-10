const slideContainer = document.querySelector('.container')
const slide = document.querySelector('.slides')
const prevButton = document.getElementById('prev-button')
const nextButton = document.getElementById('next-button')
const interval = 1000;

let slides = document.querySelectorAll('.slide')
let index = 1
let slideId

const firstClone = slides[0].cloneNode(true)
const lastClone = slides[slides.length - 1].cloneNode(true)

firstClone.id = 'first-clone'
lastClone.id = 'last-clone'

//infinte
slide.append(firstClone)
slide.prepend(lastClone)

const slideWidth = slides[index].clientWidth

slide.style.transform = `translateX(${-slideWidth * index}px)`

const startSlide = () => {
    slideId = setInterval(() => {
        moveToNextSlide()
    }, interval)
}

const getSlides = () => document.querySelectorAll('.slide')

const moveToNextSlide = () => {
    slides = getSlides()
    if(index >= slides.length -1) return
    index++
    slide.style.transform = `translateX(${-slideWidth * index}px)`
    slide.style.transition = `.7s`
}

const moveToPreviousSlide = () => {
    if(index <= 0) return
    index--
    slide.style.transform = `translateX(${-slideWidth * index}px)`
    slide.style.transition = `.7s` 
}


slide.addEventListener('transitionend', () =>{
    slides = document.querySelectorAll('.slide')
    if(slides[index].id === firstClone.id){
        slide.style.transition = 'none'
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`
    }

    if(slides[index].id === lastClone.id){
        slide.style.transition = 'none'
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`
    }
})


slideContainer.addEventListener('mouseenter', () => {
    clearInterval(slideId)
})

slideContainer.addEventListener('mouseleave', startSlide)

nextButton.addEventListener('click', moveToNextSlide)
prevButton.addEventListener('click', moveToPreviousSlide)

startSlide()