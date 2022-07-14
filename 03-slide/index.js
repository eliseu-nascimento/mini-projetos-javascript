'use strict'

const [slides, slideVisibleClass] = [document.querySelectorAll('.slide__item'), 'slide__item--visible']

let currentSlideIndex = 0

const startSlide = () => {
    currentSlideIndex == slides.length && (currentSlideIndex = 0)

    slides.forEach(slide => slide.classList.remove(slideVisibleClass))

    slides[currentSlideIndex].classList.add(slideVisibleClass)

    currentSlideIndex++
}

setInterval(startSlide, 2000)