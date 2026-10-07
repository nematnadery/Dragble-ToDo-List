let addBtn = document.getElementById('add_btn')
let todoForm = document.querySelector('.modal')
let overlay = document.querySelector('#overlay')
let closeModal = document.querySelector('.close-modal')
let todoSubmit = document.querySelector('#todo_submit')
let todoInput = document.querySelector('#todo_input')
let noStatus = document.querySelector('#no_status')
let closeIcon = document.querySelectorAll('.close')
let todoContainer = document.querySelector('.todo-container')


function addBtnHandler(){
    todoForm.classList.add('active')
    overlay.classList.add('active')

}

function closeModalHnadler(){
    todoForm.classList.remove('active')
    overlay.classList.remove('active')
}


let idIndex = 1;
function todoSubmitHandler(){
    let todoInputValue = todoInput.value
    let newDivElem = document.createElement('div')
    let newSpanElem = document.createElement('span')
    newSpanElem.innerHTML = '&times;'
    newDivElem.classList.add('todo')
    newSpanElem.classList.add('close')
    newDivElem.setAttribute('draggable', 'true')
    newDivElem.setAttribute('ondragstart', 'dragStartHandler(event)')
    newDivElem.id = `item-${idIndex}`;
    newDivElem.textContent = todoInputValue
    newDivElem.append(newSpanElem)
    noStatus.append(newDivElem)
    todoForm.classList.remove('active')
    overlay.classList.remove('active')
    todoInput.value = ''
    idIndex ++
}



function dragStartHandler(event){
    event.dataTransfer.setData('elemId', event.target.id)
}

function dropHandler(event){
    let targetId = event.dataTransfer.getData('elemId')
    let targetElem = document.getElementById(targetId)
    event.target.append(targetElem)
}


function dropOverHandler(event){
    event.preventDefault()
}

todoContainer.addEventListener('click', function(event){
    if(event.target.classList.contains('close')){
        event.target.parentElement.remove()
    }
})
todoSubmit.addEventListener('click', todoSubmitHandler)
closeModal.addEventListener('click', closeModalHnadler)
addBtn.addEventListener('click', addBtnHandler)