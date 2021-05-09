"use strict";
let cbLimit = document.getElementById('cbLimit');
let binary = document.getElementById('binary');
let restart = document.getElementsByTagName('img');
let decimal = document.getElementById('decimal');
let message = document.getElementsByTagName('p');

binary.focus();

function myAlert(msg) {
    message[0].textContent = msg;
}

function resetAll(){
    !cbLimit.checked ? cbLimit.checked = true : cbLimit.checked;
    binary.setAttribute('maxlength','8');
    binary.value = '';
    decimal.value = '';
    binary.focus();
    myAlert('Digite apenas 0 ou 1');
}

function onOfLimit(){
    if(binary.getAttribute('maxlength')){
        binary.removeAttribute('maxlength')
    }else{
        binary.setAttribute('maxlength','8');
        binary.value = (binary.value).slice(0,8);
        convertBinaryToDecimal();
    }
    binary.focus();
}

function excludingTheLastDigit(){
    binary.value = (binary.value).slice(0,((binary.value).length)-1);
}

function lastDigit(){
    let lastDigitIndex = (binary.value).length;
    let lastDigit = (binary.value).charAt(lastDigitIndex - 1);
    return lastDigit;
};

function validatingDigit() {
    let tempLastDigit = lastDigit();
    if (tempLastDigit === '0' || tempLastDigit === '1') {
        myAlert('Dígito Válido');
        excludingTheLastDigit();
        binary.value += tempLastDigit;
        convertBinaryToDecimal();
    }else{
        myAlert('Dígito inválido');
        excludingTheLastDigit();
    }
}

function convertBinaryToDecimal(){
    let numberOfDigits = ((binary.value).length)-1
    let value = 0;
    for(let i = numberOfDigits, j = 0; i >= 0; i--, j++){
        value += (Number(binary.value.charAt(j)))*(Math.pow(2,i)); 
    };
    decimal.value = value;
}

binary.addEventListener('input', validatingDigit);

restart[0].addEventListener('click', resetAll);

cbLimit.addEventListener('click', onOfLimit);