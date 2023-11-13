function suma(){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let result = number1 + number2;

    document.getElementById('resultado').value = result;
}


function resta(){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let result = number1 - number2;

    document.getElementById('resultado').value = result;
}

function multiplicacion(){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let result = number1 * number2;

    document.getElementById('resultado').value = result;
}

function divicion(){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let result = number1 / number2;

    document.getElementById('resultado').value = result;
}

function raiz(){
    let number1 = parseFloat(document.getElementById('number1').value);
    let result = Math.sqrt(number1);

    document.getElementById('resultado').value = result;
}

document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){
    document.getElementById("move-content").classList.
    toggle('move-container-all');

    document.getElementById("show-menu").classList.
    toggle('show-lateral');
}
