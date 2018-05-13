var width = 100; // ширина изображения
var count = 2; // количество изображений
var carousel = document.querySelectorAll('#carousel');
var position = 0;// текущий сдвиг влево
var modal = document.getElementById("myModal");
var close = document.getElementById('close_btn');
var slider = document.getElementById('slides');
var imgShow = document.getElementById('modal_img');
var images_1 = ["img/1 (1).png", "img/1 (2).png", "img/1 (3).png", "img/1 (4).png", "img/1 (5).png", "img/1 (6).png", "img/1 (7).png",
    "img/1 (8).png", "img/1 (9).png", "img/1 (10).png"];
var images_2 = ["img/2 (1).png", "img/2 (2).png", "img/2 (3).png", "img/2 (4).png", "img/2 (5).png", "img/2 (6).png", "img/2 (7).png",
    "img/2 (8).png", "img/2 (9).png", "img/2 (10).png"];
var images_3 = ["img/3 (1).png", "img/3 (2).png", "img/3 (3).png", "img/3 (4).png", "img/3 (5).png", "img/3 (6).png", "img/3 (7).png",
    "img/3 (8).png", "img/3 (9).png", "img/3 (10).png"];
var a = document.querySelectorAll('a');
console.log(a[0])

//
carousel.forEach(function (el) {
    var list = el.querySelector('ul');
    var listElems = el.querySelectorAll('li');

    el.querySelector('.prev').onclick = function () {
        // сдвиги
        position = Math.min(position + width * count, 0);
        list.style.marginLeft = position + 'px';
        console.log(position);
    };
    el.querySelector('.next').onclick = function () {
        // сдвиг вправо
        position = Math.max(position - width * count, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
    };

    listElems.forEach(function (el) {
        el.onclick = function (e) {
            modal.style.display = "block";
            slider.style.display = "block";
            if( +e.target.dataset.tab === 1) {
                imgShow.src = images_1[1];
                moveImage(images_1, 1)
            } else if (+e.target.dataset.tab === 2) {
                imgShow.src = images_2[2];
                moveImage(images_2, 2)
            } else {
                imgShow.src = images_3[3];
                moveImage(images_3, 3)
            }
        }
    })
});

close.onclick = function () {
    modal.style.display = "none";
}

function moveImage (arr, n) {
    a[0].onclick = function () {
        n -= 1;
        imgShow.src = arr[n]
        if (n === 0){
            n = arr.length - 1;
        }
    }
    a[1].onclick = function () {
        n += 1;
        if (n >= arr.length){
            n -= arr.length;
        }
        imgShow.src = arr[n]
    }
}