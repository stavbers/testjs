// var firstFunction = function () {
//     console.log("Run firstFunction.");

//    };
 
//    function runFunction(param) {
//     console.log("Run runFunction");
//     param();
//    };
//    runFunction(firstFunction);

var T;
function readURL(e) {
    if (this.files && this.files[0]) {
        var reader = new FileReader();
        $(reader).load(function(e) { 
            $('#upload-img').attr('src', e.target.result); 
        });
        reader.readAsDataURL(this.files[0]);
    }
}
$("#upload").change(readURL);
// замена картинок
// var T = 'img/img07.jpg';
$('.menu-item-img').hover(function () {
    $(this).attr('src', 'img/img05.jpg');
    $(this).css('cursor', 'pointer');
}, function () {
    $(this).attr('src', T);
    // $(this).attr('src', 'img/img06.jpg');
});   




// var arr = [3,2,5,6];
// var arrTwo = [255,4,1080,987,567];

// var test = function arraySum(array){
// var sum = 0;
// for(var i = 0; i < array.length; i++){
//     sum += array[i];
//     }
//     return sum;
// console.log(sum);
// }

// // arraySum(arr);
// // var test = arraySum(arrTwo);
// console.log(test(arr));                 




// var h1Text = document.getElementById("myAnchor").textContent;
// // var pText = document.getElementById("text").textContent;
// var pText = document.querySelector("#text").textContent;
// h1Text += "Hello Dolly";
// pText += " <b> Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. </b>";

// console.log(h1Text);

// document.getElementById("myAnchor").innerHTML = h1Text;
// document.querySelector("#text").innerHTML = pText;
// console.log(pText);
// var tex = document.querySelectorAll("#text").innerHTML = "Hello Dolly."
// var text = document.querySelectorAll("#myAnchor").textContent;
// var h1 = document.querySelectorAll("#myAnchor");
// console.log(h1);
// h1.innerHTML="Hello Dolly";
// console.log(text);

function clocks() {
    var date = new Date();
    var h = date.getHours()
    var m = date.getMinutes();
    console.log("Часов " + h + " Минут " + m);
}
setInterval(clocks, 60000);

// часы 
function startTime()
{
var tm=new Date();
var h=tm.getHours();
var m=tm.getMinutes();
var s=tm.getSeconds();
var txt= document.getElementById('txt');
m=checkTime(m);
s=checkTime(s);
// txt.animate();
txt.innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',1000);
}
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}
// часы


// баду 

// var links = document.querySelectorAll('.user-card__link[href='/profile/']');
// var links = document.querySelectorAll('a.user-card__link[href='/profile/']');
// /^[a-z]{7}[{1}[0-9]{10}$/
//  /^[a-z]{5}[:]{1}[{2}[a-z]{5}[.]{1}[a-z]{3}[{1}[a-z]{7}[{1}[0-9]{10}$/
//  console.log(links.length);
// var links = document.querySelector('a.user-card__link').getAttribute('href');
// var badoo = "https://badoo.com";
// var result = badoo + links;
// console.log(result);
// window.open(result);

// var nodeList = document.querySelectorAll('a.user-card__link');
// var nodeLenght = nodeList.length;
// console.log("Длина Нод листа " + nodeLenght);
// var firstLi = nodeList.item(1);
// var nod = 0;
// var nodeLenght = 20;
//     for (i = 0; i < nodeLenght; i++) {
//         nod = nod + 1;
//         console.log(nod);
//     }
// var badooMassiv;
var badoo = "https://badoo.com";
var links = document.querySelectorAll("a.user-card__link");
var i;
for (i = 0; i < links.length; i++) {
// console.log(links[i].getAttribute('href'));
console.log(badoo + links[i].getAttribute('href'));
// window.open(badoo + x[i].getAttribute('href'));
}


// console.log(nodelistHref) ;
// console.log(nodelistHref);
// badooMassiv = badoo + nodelistHref;
// console.log(badooMassiv);
// window.open(badooMassiv);

// баду 

// определение кол-ва (байт/бит)
// 1кб = 1024 байт
// 1 байт = 8 бит
// let userValue = prompt("Введите кол-во килобайт");
// let bytUser = document.querySelector('.bytValue');
// let bitUser = document.querySelector('.bitValue');
// const byt = 1024;
// const bit = 8;
// function math(x,y) {
//     x = userValue * byt;
//     y = x * bit;
//     function printValue() {
//         bytUser.innerHTML = x;
//         bitUser.innerHTML = y;
//     };
//     console.log(x + " " + y);
//     printValue();
// };
// math();

// function makeByt(x) {
//     return function(y) {
//       return x * y;
//     };
//   };
//   var addByt = makeByt(byt);
// console.log(addByt(userValue));  // 7

// function makeBit(x) {
//     return function(y) {
//         return byt * x * y;
//     };
// };
// var addBit = makeBit(bit);
// console.log(addBit(userValue)); 
// определение кол-ва (байт/бит)


var arr = new Array('Kia Ceed', 'BMW 320', 'BMW 328', 'Хюндай Элантра', 'Спортадж', 'Ауди 4', 'Ауди 3', 'Киа Оптима', 'Бери Гелик!', 'Оставить Сиида'); 
var RandElement = arr[Math.floor(Math.random()*(arr.length))];
console.log(RandElement);


// вывести числа кратные 3 от 0 до 100;

let count = 0;
for (let i = 0; i <=100; i++) {
// console.log(i);
    if (i % 3 === 0) count++;
    // console.log(i);
    
    
}
console.log(count);

// возвращение значение функцией!
// let userAnswerNumber = +prompt('Введите число ', '' );
// let info;
// console.log(userAnswerNumber);
// function Answer(xs) {
//     return(xs + 1)
// };

// console.log(Answer(5));
// info = Answer(userAnswerNumber);
// console.log(info);

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms =='' || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?',''),
//     c = prompt('Один из последних просмотренных фильмов?',''),
//     d = prompt('На сколько оцените его?','');

//     personalMovieDB.movies[a] = b;
//     personalMovieDB.movies[c] = d;
//     console.log(personalMovieDB);
// цикл for
function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?','');
              if (a != null && a != '' && b != null && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done')
              }else{
                  i--;
                  console.warn('error')
              }
    }
}
rememberMyFilms();
//  цикл do(while)

// do {
//     i ++;
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//            b = prompt('На сколько оцените его?','');
//            if (a != null && a != '' && b != null && b != '' && a.length < 50) {
//                     personalMovieDB.movies[a] = b;
//                         console.log('done')
//                        }else{
//                            i--;
//                            console.warn('error')
//                        }
//   } while (i < 2);

//  цикл (while)
// while (i < 2) {
//     i++
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?','');
//             if (a != null && a != '' && b != null && b != '' && a.length < 50) {
//                      personalMovieDB.movies[a] = b;
//                          console.log('done')
//                         }else{
//                             i--;
//                             console.warn('error')
//                         }
// }




function detectPersonalLevel() {
    if (personalMovieDB.count >= 1 && personalMovieDB.count <= 10) {
        console.log('Просмотрено довольно мало фильмов');
    }else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    }else if (personalMovieDB.count >= 30){
        console.log('Вы киноман');
    }else if (personalMovieDB.count == 0 && personalMovieDB.count == null) {
        console.log('Произошла ошибка');
    } 
    else {
        console.log('Произошла ошибка');
}
}
detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt('Ваш любимый жанр под номером ${i}', '');
    }
}
writeYourGenres();
// console.log(personalMovieDB);