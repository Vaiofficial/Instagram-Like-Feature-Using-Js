
var heart = document.querySelector("#heart");
var pic = document.querySelector("#mid");

pic.addEventListener("click", function () {
    // console.log("hello");
    heart.style.transform = "translate(-50% , -50%) scale(1)"
    heart.style.opacity = 0.8;

    setTimeout(function(){
        heart.style.opacity = 0;
    },1500)
    setTimeout(function(){
        heart.style.transform = "translate(-50% , -50%) scale(0)"
    },3500)

});