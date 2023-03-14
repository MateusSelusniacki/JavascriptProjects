var closeButton = document.querySelector('.closeNewListScreen')
var doneButton = document.querySelector('.done')
var inputNewList = document.querySelector('.newListScreenInput')

var newListButton = document.getElementById('addButton')

var createTaskButton = document.getElementById('btnCriar')

function toggleNewListScreen(){
    var createNewListScreen = document.getElementById('newListScreen')
    createNewListScreen.classList.toggle('show')
    createNewListScreen.classList.toggle('hide')
}

function createNewList(){
    var taskListTitle = document.getElementById("taskListTitles");
    var newListItem = document.createElement("li");
    var newButton = document.createElement("input"); 
    newButton.value = inputNewList.value;
    newButton.classList.add("taskTitle");
    newListItem.appendChild(newButton);
    taskListTitle.appendChild(newListItem);
}

closeButton.addEventListener("click", function() {
    toggleNewListScreen()
});

inputNewList.addEventListener("input", function() {
    if(inputNewList.value.length > 0){
        doneButton.style.pointerEvents = "auto";
        doneButton.style.opacity = 1;
    } else {
        doneButton.style.pointerEvents = "none";
        doneButton.style.opacity = 0.5;
    }
});

doneButton.addEventListener('click', function(){
    createNewList()
    toggleNewListScreen()
})

const submenus = document.querySelectorAll('.submenu');
let isIcon = false
// adiciona um evento de clique no documento
document.addEventListener('click', event => {
    // se o clique não foi em um icone
    if(!isIcon){
        // esconde todos os submenus
        submenus.forEach(submenu => submenu.classList.remove('show'));
    }
    else{
        isIcon = false
    }
});

// seleciona todos os ícones
const icons = document.querySelectorAll('.icon');
const submenusItens = document.querySelectorAll('ul li button,.add');

function setSubmenusClean(){
    icons.forEach(icon =>{
        let dataTarget = icon.getAttribute('data-target');
        let target = document.getElementById(dataTarget);
        if(target.classList.contains("show")){
            target.classList.toggle("show")
        }
    });

}

// para cada ícone, adiciona um listener de evento de clique
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        // obtém o ID do submenu alvo
        const targetId = icon.getAttribute('data-target');
        const target = document.getElementById(targetId);
        isIcon = true
        // remove todos os submenus ativos
        setSubmenusClean()

        // adiciona ou remove a classe "show" do submenu
        target.classList.toggle('show');
    });
});

// para cada botão que é icone de lista, adiciona um listener de evento de clique
submenusItens.forEach(icon => {
    icon.addEventListener('click', () => {
        isIcon = true
        console.log(icon)
        if(icon.id == 'btnList'){
            inputNewList.value = ""
            toggleNewListScreen()
        } else {
            console.log('outro botão')
        }
    });
});

newListButton.addEventListener('click', () => {
    createNewList()
})


createTaskButton.addEventListener('click', () => {
    var inputElement = document.getElementById('newListFromFotter')
    if(inputElement.value.length > 0){
        var tasks = document.getElementById("tasks");
        var newListItem = document.createElement("li");
        var newSpan = document.createElement("span"); 
        var concludedCheckbox = document.createElement("input"); 

        concludedCheckbox.type = "checkbox"
        concludedCheckbox.classList.add('concludedCheckbox')

        newSpan.innerHTML = inputElement.value;
        newSpan.classList.add("taskSpan");
        newListItem.appendChild(concludedCheckbox);
        newListItem.appendChild(newSpan)
        tasks.appendChild(newListItem); 
    }
})
