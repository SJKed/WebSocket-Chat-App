const socket = io()

const setNameForm = document.querySelector('.set-name-form')
const nameInput = document.querySelector('.name-input')

const chat = document.querySelector('.chat-form')
const Input = document.querySelector('.chat-input')
const chatWindow = document.querySelector('.chat-window')

setNameForm.addEventListener('submit', event => {
    event.preventDefault()
    const name = nameInput.value
    console.log("name:" + name)
    socket.emit('setName', name)
});

socket.on('redirect', url => {
    window.location.href = url
})

chat.addEventListener('submit', event => {
    event.preventDefault()
    socket.emit('chat', Input.value)
    Input.value = ''
});

const renderMessage = message => {
    const div = document.createElement('div')
    div.classList.add('render-message')
    div.innerText = message
    chatWindow.appendChild(div)
}

socket.on('chat', message => {
    console.log('From server: ', message)
    renderMessage(message)
})