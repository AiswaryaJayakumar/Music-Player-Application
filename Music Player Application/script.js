var progress = document.getElementById("progress")
var song = document.getElementById("song")
var play = document.getElementById("play")

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playpause() {
    if(play.classList.contains("fa-pause")) {
        song.pause()
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
    }
    else {
        song.play()
        play.classList.remove("fa-play")
        play.classList.add("fa-pause")
    }
}

if(song.play()) {
    setInterval(()=> {
        progress.value = song.currentTime;
    },500)
}

progress.onchange = function() {
    song.play()
    song.currentTime = progress.value;
    play.classList.remove("fa-play")
    play.classList.add("fa-pause")
    
}