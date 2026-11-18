const texts = [
    "hii",
    "Welcome to my portfolio!",
    "What's cooking??",
    "OUII SHIII",
    "Heylol",
    "I love HackClub"
]

document.getElementById("yellowText").textContent = texts[Math.floor(Math.random() * texts.length)];

const bgMusic = document.getElementById('bgMusic');
const audioBtn = document.getElementById("audio");
const soundOnIcon = document.getElementById("soundOnIcon");
const soundOffIcon = document.getElementById("soundOffIcon");

let isMuted = false;

audioBtn.addEventListener("click", () =>  {
    isMuted = !isMuted;
    bgMusic.muted = isMuted;

    if (!isMuted) {
        soundOnIcon.style = "display:  none;";
        soundOffIcon.style = "";
    }
    else {
        soundOffIcon.style = "display:  none;";
        soundOnIcon.style = "";
    }
});

document.addEventListener('click', function() {
    if (bgMusic.paused) {
        bgMusic.volume = 1.0;
        bgMusic.play();
    }
}, { once: true });

