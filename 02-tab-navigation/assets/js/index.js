'use strict'

const menuItems = document.querySelectorAll('.menu__item')
const pages = document.querySelectorAll('.page')

const menuItemActive = 'menu__item--active'
const pageActive = 'page--active'

const addClassActive = (element, index, menuItemActive) => element[index].classList.add(menuItemActive)

const removeClassActive = (element, pageActive) => element.forEach(element => element.classList.remove(pageActive))

const changeTab = (index) => {
    removeClassActive(menuItems, menuItemActive)
    addClassActive(menuItems, index, menuItemActive)

    removeClassActive(pages, pageActive)
    addClassActive(pages, index, pageActive)
}

for(let index = 0; index < menuItems.length; ++index) menuItems[index].addEventListener('click', () => changeTab(index))