var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function MaisUm() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function MenosUm(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

    