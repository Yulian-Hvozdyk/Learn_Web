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
function moveToLeft() {
    console.log(document.getElementById('photo'));
    document.getElementById('photo').style.textAlign = 'left';
}


function moveToCenter() {
    console.log(document.getElementById('photo'));
    document.getElementById('photo').style.textAlign = 'center';
}

function moveToRight() {
    console.log(document.getElementById('photo'));
    document.getElementById('photo').style.textAlign = 'right';
}
//////////////////////////////////////////////////////////////////////////////////////////////
// Функции изменения параметров фотографии


//1 - высота равна высоте фотографии внутри
function minHeight() {
    console.log(document.getElementById('photo'))
    document.getElementById('photo').style.height = "400px";
}
//2 - высота равна 1.5 от фотографии
function averageHeight() {
    console.log(document.getElementById('photo'))
    document.getElementById('photo').style.height = "600px";
}
//3 - высота в два раза больше фотографии
function maxHeight() {
    console.log(document.getElementById('photo'))
    document.getElementById('photo').style.height = "800px";
}
//4 - ширина равна ширине фотографии
function minWidth() {
    console.log(document.getElementById('photo'))
    document.getElementById('photo').style.width = "400px";
}
//5 - ширина равна половине ширины экрана
function averageWidth() {
    console.log(document.getElementById('photo'))
    document.getElementById('photo').style.width = "50%";
}
//6 - весь экран
function maxWidth() {
    console.log(document.getElementById('photo'))
    document.getElementById('photo').style.width = "auto";
}
