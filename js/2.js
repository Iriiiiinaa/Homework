document.addEventListener("DOMContentLoaded", function(){
    let age = parseInt(prompt("Введите ваш возраст"));
    if (age<65){
        console.log("Вам ещё рано на пенсию");}
    else{
        console.log("Поздравляем с пенсионным возрастом!");
    }

    let a = parseInt(prompt("Введите первое число"));
    let b = parseInt(prompt("Введите второе число"));
    if (a>b){
        console.log("Первое число больше");}
    else if (a<b){
        console.log("Второе число больше");}
    else{
        console.log("Числа равны");
    }

    let aa = parseInt(prompt("Введите число"));
    if (aa%2 == 0){
        console.log("Это чётное число");}
    else{
        console.log("Это нечётное число");
    }

})