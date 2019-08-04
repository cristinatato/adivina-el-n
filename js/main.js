'use strict';

const title = document.querySelector ('.title');
const subt = document.querySelector ('.subt');
const input = document.querySelector ('.input');
const btn = document.querySelector ('.btn');
const text = document.querySelector ('.text');
const reset = document.querySelector ('.reset');
let counter = document.querySelector ('.counter');
let counterNumber = 0;
const initialMessage = 'Escribe un número y dale a prueba.';
text.innerHTML = initialMessage;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

let myRandomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es ${myRandomNumber}`);

function getNumber () {
    const goInput = parseInt(input.value);
    console.log (goInput);
    
    if (input.value === '') {
        text.innerHTML = 'El campo está vacío. Por favor, introduzca un número.'
        counterNumber ++;
        counter.innerHTML = counterNumber;
    }else if (goInput > 100 || goInput < 0) {
        console.log('tas pasao loco');
        text.innerHTML = 'El número tiene que encontrarse entre 0 y 100.'
        counterNumber ++;
        counter.innerHTML = counterNumber;
    } else if (goInput === myRandomNumber) {
        console.log('yay');
        text.innerHTML = '¡HAS GANADO, CAMPEONA!';
        counterNumber = 0;
        
    } else if (goInput > myRandomNumber) {
        console.log('eres ma grandeee');
        text.innerHTML = 'El número es demasiado alto.';
        counterNumber ++;
        counter.innerHTML = counterNumber;
        
    } else if  (goInput < myRandomNumber) {
        console.log('eres ma pequeñooo');
        text.innerHTML = 'El número es demasiado bajo.'; 
        counterNumber ++;
        counter.innerHTML = counterNumber;
    }
}
function getReset () {
    const defaultInput = '';
    input.value = defaultInput;
    const defaultCounter = '';
    counter.innerHTML = defaultCounter;
    counterNumber = 0;
    const defaultText = initialMessage;
    text.innerHTML = defaultText;
    myRandomNumber = getRandomNumber(100);
    console.log(`Mi número aleatorio es ${myRandomNumber}`);

}
function pressEnter (event) {
    if (event.key === "Enter") {
        getNumber();
    }
}
btn.addEventListener('click', getNumber);
reset.addEventListener('click', getReset);
input.addEventListener('keydown', pressEnter);