// Obtém o elemento do input
const inputElement = document.getElementById("input");
const malFormedExpression = document.getElementById("malFormedExpression");
const screenSpan = document.getElementById("screenSpan");

function isInputValid(key){
    if (!isNaN(key) || key == "(" || key == ")") {
        return true;
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    // Verifica se o input está vazio
    if (inputElement.value.length === 0) {
        return false;
    }
    return true;
    } else if(key !== "Backspace"){
        return false;
    } else return true;
}

function reverseString(myString){
    reversed = ""
    for (let i = myString.length - 1; i >= 0; i--) {
        reversed += myString[i]
    }
    return reversed
}

function checkLastCaracteresNumber(myString){
    // Percorre a string da direita para a esquerda
    let number = ""
    for (let i = myString.length - 1; i >= 0; i--) {
        let caracterer = myString[i];
        
        // Verifica se o caractere é um número
        if (!isNaN(parseInt(caracterer))) {
            number += caracterer
            inputElement.value = inputElement.value.slice(0, -1);
        } else {
            break;
        }
    }
    return reverseString(number)
}

function backspaceClick(){
    if(inputElement.value.length == 0)
        return
    inputElement.value = inputElement.value.slice(0, -1);
    return
}

function computeExpression(expressionRaw){
    expression = expressionRaw.replace(/mod/g, "%");
    let validExpression = /^[\d+\-*/(),.x²%\s]+$/.test(expression);
    
    if(validExpression){
        // Verificando se a expressão segue as regras da matemática
        try {
            let result = eval(expression.replace());
            inputElement.value = result;
            screenSpan.innerHTML = result
            
            return true
        } catch (error) {
            console.log("erro:" + error)
            return false
        }
    }
    return false
}

function enterHandler(){
    malFormedExpression.style.display = "none"
    if(inputElement.value.length == 0)
        return
    if(!isNaN(inputElement.value)){

        screenSpan.innerHTML = inputElement.value
        inputElement.value = ""
        return 
    }
    
    if(!computeExpression(inputElement.value))
        malFormedExpression.style.display = "block"
    return
    
}

const btns = document.querySelectorAll('button'); // seleciona todos os buttons
    
// itera sobre todas as divs selecionadas e adiciona um evento de clique a cada uma
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.textContent; // obtém o conteúdo do button clicado
        if(content == "="){
            // caso seja o igual
            enterHandler()
        } else if(content == "<") {
            // caso seja o backspace
            backspaceClick()
        } else if(content == "pi"){
            inputElement.value += "3.1415926535"
        } else if(content == "x²"){
            lastNumber = checkLastCaracteresNumber(inputElement.value)
            lastNumber = lastNumber*lastNumber
            if(lastNumber != 0)
                inputElement.value += lastNumber
        }
        else if(content == '√'){
            lastNumber = checkLastCaracteresNumber(inputElement.value)
            lastNumber = Math.sqrt(lastNumber)
            if(lastNumber != 0)
                inputElement.value += lastNumber
        }  
        else {
            // caso seja um botão de digito ou operação
            if(inputElement.value.length === 0 && (!isNaN(content) || content == "(" || content == ")" )){
                inputElement.value += content
            } else if(inputElement.value.length !== 0){
                inputElement.value += content
            }
        }
    });
});

// Adiciona um ouvinte de eventos para o evento keydown
inputElement.addEventListener("keydown", function(event) {
    // Obtém o código da tecla pressionada
    const key = event.key;

    if(key == "Enter"){
        enterHandler()
    } else if(!isInputValid(key)) {
        event.preventDefault()
    }

});