var myButton = document.querySelectorAll('.showButton');
var myPictures = document.querySelectorAll('.tab');

myButton.forEach(function(item) {
    item.onclick = function (event) {
    yots(event);
    }
})
function yots(event) {
    for (var i=0; i < 3; i++){
        if (event.target.dataset.tab === myPictures[i].dataset.tab) {
                  myPictures[i].classList.add('active');
        }
    }
}
var body = document.getElementsByTagName('body');
console.log(body)
// body.addEventListener ('click', hideAllTabs);
function hideAllTabs() {
    for (var i = 0; i < 3; i++) {
        myPictures[i].classList.remove('active');
    }
}


//
//
//     Задание 1.
//
//     Написать скрипт который будет будет переключать вкладки по нажатию
//     на кнопки в хедере.
//
//     Главное условие - изменять файл HTML нельзя.
//
//     Алгоритм:
//       1. Выбрать каждую кнопку в шапке
//          + бонус выбрать одним селектором
//
//       2. Повесить кнопку онклик
//           button1.onclick = function(event) {
//
//           }
//           + бонус: один обработчик на все три кнопки
//
//       3. Написать функцию которая выбирает соответствующую вкладку
//          и добавляет к ней класс active
//
//       4. Написать функцию hideAllTabs которая прячет все вкладки.
//          Удаляя класс active со всех вкладок
//
//     Методы для работы:
//
//       getElementById
//       querySelector
//       classList
//       classList.add
//       forEach
//       onclick
//
//       element.onclick = function(event) {
//         // do stuff ...
//       }
//
//   */
