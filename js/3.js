document.addEventListener("DOMContentLoaded", function(){

let box = document.querySelectorAll(".box");

box.forEach(function(clickbox){
    clickbox.addEventListener("click", function(){
        if(clickbox.style.backgroundColor === "red"){
            clickbox.style.backgroundColor = "orange";
            clickbox.style.margin = '10vw';
            console.log("change color");
            clickbox.style.height = '7vw';
            clickbox.style.width = '7vw';
        }
        else{
            clickbox.style.backgroundColor = "red";
            clickbox.style.margin = '3vw';
            clickbox.style.height = '10vw';
            clickbox.style.width = '10vw';
        }
    });
});

})