let btn =document.getElementById("magic-button")

let surprise =document.getElementById("surprise")
let audio = new Audio("../public/audio/retro-music.mp3")
btn.addEventListener("click",function(){
    if(surprise.style.display == "none"){
        surprise.style.display = "block";
    }
    audio.play()
});