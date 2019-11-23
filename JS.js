
/* Выводит значение полученное из input введенное пользователем*/

function showMessage () {
    alert(document.getElementById('message').value);
}

// Удаляет с input введенные элементы
function delText () {
    alert("Проходит очистка в input с надписью");
    message.value = "";
}

// Выводит рандомное число со второго input
function showRandomNum () {
    let ourNumber = document.getElementById('randomNum').value;
    let randomNumber = Math.random() * ourNumber;
    alert(Math.floor(randomNumber));
}