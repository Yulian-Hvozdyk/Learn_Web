// Вывод текста и удаление помещены в одну функцию
function buttonEvent() {
    showMessage();
    delText(textOfUser);
}

/* Кнопка "Вывести на экран", выводит значение полученное из input введенное пользователем*/
function showMessage () {
    alert(document.getElementById('textOfUser').value);
}

// Кнопка "Очистить поле", удаляет с input введенные элементы
function delText (qwerty) {
    qwerty.value = "";
}
//////////////////////////////////////////////////////////////////////////////////////////////
// ФУНКЦИИ РАНДОМА
// Кнопка "Рандомное число" генерирует рандомное число со второго input и выводит на экран
// Условие в данное функции было исправлено и было добавлено функция delText 
// function showRandomNum () {
//     let ourNumber = document.getElementById('randomNum').value;
//     let randomNumber = Math.random() * ourNumber;
//     if (!isNaN(randomNumber)) {
//         alert(Math.floor(randomNumber));
//     } else {
//         alert("Это не число!");
//     }
//     delText(randomNum);
// }
////////////////////////////////////////////////////////////////////////
// Кнопка "Рандомное число" генерирует рандомное число со второго input и выводит на экран

function showRandomNum(min = 0, max) {
    max = document.getElementById('randomNum').value;
    randomNumber = createRandomNum(min, max);
   if (!isNaN(max)) {
        alert(Math.floor(randomNumber));
    } else {
        alert("Это не число!");
    }   
    delText(randomNum);
}   

//Отдельная функция генерации числа

function createRandomNum(min, max) {
    let randomNumber = Math.random() * (max - min ) + min;
    return randomNumber;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////    
//Функции перемещения фотографии 

let myPhoto = document.getElementByI('My_photo').value;


function moveToLeft() {
    let toLeft = document.getElementById('.Left_side').value;
    myPhoto == toLeft;

}

function moveToCenter() {
    let toCenter = document.getElementById('.Middle').value;
    myPhoto == toCenter;
}

function moveToRight() { 
    let toRight = document.getElementById('.Right_side').value;  
    myPhoto == toRight;
}   