var buttons =  document.querySelectorAll("button")
for (let i = 0; i <buttons.length; i++){
    buttons[i].addEventListener("click", function() {
        var buttonHTML = this.innerHTML;
        makeSound(buttonHTML);
        buttonAnimation(buttonHTML);
    })

}

document.addEventListener("keydown", function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
})

function makeSound(key) {
    switch(key) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('./sounds/snare.mp3'); 
            audio.play();
            break;
        case "k":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currKey) {
    var activeBtn = document.querySelector("." + currKey);
    activeBtn.classList.add("pressed");

    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    }, 100);
}