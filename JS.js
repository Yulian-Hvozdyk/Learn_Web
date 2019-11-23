
/* Кнопка "Вывести на экран", выводит значение полученное из input введенное пользователем*/

function showMessage () {
    alert(document.getElementById('message').value);
}

// Кнопка "Очистить поле", удаляет с input введенные элементы
function delText () {
    alert("Проходит очистка в input с надписью");
    message.value = "";
}

// Кнопка "Рандомное число" генерирует рандомное число со второго input и выводит на экран
function showRandomNum () {
    let ourNumber = document.getElementById('randomNum').value;
    let randomNumber = Math.random() * ourNumber;
    if (randomNumber || "" ) {
        alert(Math.floor(randomNumber));
    } else {
        alert("Это не число!");
    }
}