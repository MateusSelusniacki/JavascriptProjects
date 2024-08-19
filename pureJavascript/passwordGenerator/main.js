function updateValue(value) {
    document.getElementById('slider-value').textContent = value;
}

var passwordSpan = document.getElementById('password')

var slider = document.getElementById('sliderCharacteresQuantity')
var genereateButton = document.getElementById('generateButton')
var checkboxLetters = document.getElementById('letters')
var checkboxNumbers = document.getElementById('numbers')
var checkboxSymbols = document.getElementById('symbols')
var checkboxSpecialCharacteres = document.getElementById('specialCharacteres')

genereateButton.addEventListener('click', () =>{
    let result = '';
    letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    numbers = '0123456789'
    specialCaracteres = '!@#$%^&*'
    symbols = '()[]{}<>|\\/</>'
    let characteres = '';

    if(checkboxLetters.checked)
        characteres += letters

    if(checkboxNumbers.checked)
        characteres += numbers

    if(checkboxSymbols.checked)
        characteres += symbols

    if(checkboxSpecialCharacteres.checked)
        characteres += specialCaracteres

    let lenPassword = parseInt(slider.value)+1

    for (let i = 0; i < lenPassword; i++) {
        const indice = Math.floor(Math.random() * characteres.length);
        result += characteres.charAt(indice);
    }
    const encodedText = result.replace(/[<>&]/g, function(char) {
        switch (char) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            default: return char;
        }
    });
    console.log(result)
    passwordSpan.innerHTML = encodedText
})