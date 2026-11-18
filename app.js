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

let isMuted = true;

document.addEventListener('click', function() {
    if (bgMusic && bgMusic.paused) {
        soundOffIcon.style.display = 'none';
        soundOnIcon.style.display = 'block';
        bgMusic.volume = 1.0;
        bgMusic.play();
        isMuted = false;
    }
}, { once: true });

audioBtn.addEventListener("click", () =>  {
    isMuted = !isMuted;
    bgMusic.muted = isMuted;

    if (isMuted) {
        soundOnIcon.style.display = 'none';
        soundOffIcon.style.display = 'block';
    }
    else {
        soundOffIcon.style.display = 'none';
        soundOnIcon.style.display = 'block';
    }
});

const clicksound = document.getElementById("clicksound");
document.addEventListener('click', function() {
    const buttonCheck = event.target.closest('button, a');

    if (buttonCheck) {
        clicksound.volume = 1.0;
        clicksound.play();
    }
});
