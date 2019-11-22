

function showMessage () {
    alert(document.getElementById('message').value);
    if (message == "") {
        alert("Введите ваш текст")
    }
}
/* Выводит значение полученное из input введенное пользователем*/

function delText () {
    alert("Очищать input с надписью");
    message.value = "";
}
// Удаляет с input введенные элементы