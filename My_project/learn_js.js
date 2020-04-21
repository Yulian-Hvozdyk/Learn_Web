/*Данный способ выводит значение из переменной в наш div. 
Все что написано в теге <div> в котором находиться id, 
не будет выводиться
*/
// let myString = 'Тікай з села!!! Тобі пі**а!!! Я тебе знайду і відірву, твої яйо!!!';
// document.getElementById('messageFromJaryk').innerHTML = myString;


/* Данныйй способ заменяет значение в теге div, если оно имееться.
Если значения нет, просто помещаеться наше значение и выводиться
*/ 

// let message = document.getElementById('messageFromMe').textContent;
// document.getElementById('messageFromMe').textContent ; 

// function calculateTaxes (income) {

//     if (income <= 1000) {    
//         return income * 0.02;
//     } else if (income <= 10000) {
//         return income * 0.03 * 0.02;
//     } else {
//         return income * 0.05;
//     }
    
// }

// let result = calculateTaxes(10000);
// console.log(result);


// let arr = [
//     {
//         price: 30,
//         disc: 'this is tomato',
//         name: 'Tomato'
        
//     },

//     {
//         price: 690,
//         disc: 'this Javascript',
//         name: 'Scrtipt'
        
//     },

//     {
//         price: 228,
//         disc: 'this a car',
//         name: 'Mustang'
        
//     },

// ]

// function counterPlus1() {
//     console.log(arr);
//     document.getElementById('q1').textContent = arr[0].price;
//     document.getElementById('q2').textContent = arr[0].disc;
//     document.getElementById('q3').textContent = arr[0].name;

    
// }

// function counterPlus2() {
//     console.log(arr);
//     document.getElementById('q1').textContent = arr[1].price;
//     document.getElementById('q2').textContent = arr[1].disc;
//     document.getElementById('q3').textContent = arr[1].name;

    
// }

// function counterPlus3() {
//     console.log(arr);
//     document.getElementById('q1').textContent = arr[2].price;
//     document.getElementById('q2').textContent = arr[2].disc;
//     document.getElementById('q3').textContent = arr[2].name;

    
// }
/////////////////////////////////////////////////////////////////
// 1 Создать три кнопки
//2 создать объект (цена, описание. название) пользователь
//3 бонус = кнопка меняет цвет объекта

// let products = [
    
//     {   img: '../My project/img/Apple_II-750x510.png',
//         name: 'МЕГА КОМПУКТЕР',
//         disc: 'Данный КОМПУКТЕР преднозначин для топовых игроков и агрошкольников',
//         price: 'ЦЕНА: 30000 руб.',
//         author: 'автор: Ашот Вахтангович'
//     },

//     {
//         img: '../My project/img/3181616.png',
//         name: 'Govnophone',
//         disc: 'С помощью данного говнофона можно звонить.',
//         price: 'ЦЕНА: 50000 руб.',
//         author: 'автор: Jaryk Vadila'
//     },

//     {
//         img: '../My project/img//Euroškola_Praha.JPG',
//         name: 'Школа',
//         disc: 'При покупке данного товара,+ (Рабы в подарок)',
//         price: 'ЦЕНА: 1000000 руб.',
//         author: 'автор: Муравей Игнатович'
//     }
// ]

// function changeColor () {
//     document.getElementById('block-content-color').style.background = 'yellow';
//     document.getElementById('content-color').style.background = 'yellow';
//     document.getElementById('content-color').style.color = 'black';
// }


// function changeProducts1 () {
//     console.log(products);
//     document.getElementById('img-product').src = products[0].img;
//     document.getElementById('p1').textContent = products[0].name;
//     document.getElementById('p2').textContent = products[0].disc;
//     document.getElementById('p3').textContent = products[0].price;
//     document.getElementById('p4').textContent = products[0].author;

// }

// function changeProducts2 () {
//     console.log(products);
//     document.getElementById('img-product').src = products[1].img;
//     document.getElementById('p1').textContent = products[1].name;
//     document.getElementById('p2').textContent = products[1].disc;
//     document.getElementById('p3').textContent = products[1].price;
//     document.getElementById('p4').textContent = products[1].author;

// }

// function changeProducts3 () {
//     console.log(products);
//     document.getElementById('img-product').src = products[2].img;
//     document.getElementById('p1').textContent = products[2].name;
//     document.getElementById('p2').textContent = products[2].disc;
//     document.getElementById('p3').textContent = products[2].price;
//     document.getElementById('p4').textContent = products[2].author;

// }
let count = 1;

switch (count) {
    case 1:
        console.log('one');
        break;
    
    case 2:
        console.log('two');
        break;
    
    default:
        console.log('many');
}