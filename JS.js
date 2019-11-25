// Вывод текста и удаление помещены в одну функцию
function buttonEvent() {
    showMessage();
    delText();
}

/* Кнопка "Вывести на экран", выводит значение полученное из input введенное пользователем*/
function showMessage () {
    alert(document.getElementById('textOfUser').value);
}

// Кнопка "Очистить поле", удаляет с input введенные элементы
function delText () {
    alert("Проходит очистка в input с надписью");
    textOfUser.value = "";
}
//////////////////////////////////////////////////////////////////////////////////////////////
// ФУНКЦИИ РАНДОМА
// Кнопка "Рандомное число" генерирует рандомное число со второго input и выводит на экран
// function showRandomNum () {
//     let ourNumber = document.getElementById('randomNum').value;
//     let randomNumber = Math.random() * ourNumber;
//     if (randomNumber || '') {
//         alert(Math.floor(randomNumber));
//     } else {
//         alert("Это не число!");
//     }
// }

function showRandomNum(min = 0, max) {
    max = document.getElementById('randomNum').value;
    randomNumber = Math.random() * (max - min ) + min;
   if (typeof(max) ==! min) {
        alert(document.write(showRandomNum()));
    } else {
        alert("Это не число!");
    }
    
}
                     