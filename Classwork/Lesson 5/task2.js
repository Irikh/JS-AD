/*

    Задание 2.

    Напишите фунцию, которая изменяет цвет-фона и цвет текста, присваивая к новым цветам
    значение из this.color, this.background
    А так же добавляет элемент h1 с текстом "I know how binding works in JS"

    1.1 Ф-я принимает один аргумент, второй попадает в него через метод .call(obj)
    1.2 Ф-я не принимает никаких аргументов, а необходимые настройки полностью передаются через bind
    1.3 Ф-я принимает фразу для заголовка, обьект с настройками передаем через .apply();

*/

function chancheColor(color) {
    document.body.style.color = color;
    document.body.style.background = this.background;
}
chancheColor.call({background:"red"},'black');

function bindFunc() {
    document.body.style.color = this.color;
    document.body.style.background = this.background;
}
bindFunc = bindFunc.bind({background: "red", color: "white"});
bindFunc();

var x = [ 'red','white','green','gold']