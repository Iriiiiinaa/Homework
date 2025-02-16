document.addEventListener("DOMContentLoaded", function(){
    let str = "abcde";
    alert(str[0]); 
    alert(str[1]);
    alert(str[4]);

    let on = parseInt(prompt("Первое число"));
    let onn = parseInt(prompt("Второе число"));
    console.log(on>0 || onn>0);

    let age = parseInt(prompt("Ваш возраст"));
    if (age>= 18){
        console.log("Совершеннолетний");}
    else{
        console.log("Несовершеннолетний");
    }

})