'use strict'

const todos = JSON.parse(localStorage.getItem('todos')) || []

const [form, input, list] = [document.querySelector('form'), document.querySelector('input'), document.querySelector('ul')]

const renderTodos = () => {
    list.innerHTML = ''

    for (let index = 0; index < todos.length; index++) {

        const [todoElement, deleteButton] = [document.createElement('li'), document.createElement('i')]

        todoElement.classList.add('list__item')
        todoElement.textContent = todos[index]

        deleteButton.classList.add('fa-solid', 'fa-trash')
        deleteButton.addEventListener('click', () => removeTodo(index, todoElement))

        list.appendChild(todoElement)
        todoElement.appendChild(deleteButton)
    }
}
 
renderTodos()

const addTodo = () => {
    const todoText = input.value

    if (todoText.length > 2) {
        todos.push(todoText)

        input.value = ''

        renderTodos()
        saveOnLocalStorage()
    }
}

const removeTodo = (index, todoElement) => {
    todoElement.remove()

    todos.splice(index, 1)

    renderTodos()
    saveOnLocalStorage()
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    addTodo()
})

const saveOnLocalStorage = () => localStorage.setItem('todos', JSON.stringify(todos))