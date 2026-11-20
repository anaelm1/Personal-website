const clicksound = document.getElementById("clicksound");
document.addEventListener('click', function() {
    const buttonCheck = event.target.closest('button, a');

    if (buttonCheck) {
        clicksound.volume = 1.0;
        clicksound.play();
    }
});

function copyContact(btn) {
    const value = btn.getAttribute("data-copy");
    if (!value) return;

    navigator.clipboard.writeText(value);

    const sound = document.getElementById("clicksound");
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
    }

    const sub = btn.querySelector(".ttSub");
    const original = sub.textContent;
    sub.textContent = "Copied!";
    sub.style.color = "#55ff55";

    setTimeout(() => {
        sub.textContent = original;
        sub.style.color = "#aaaaaa";
    }, 1800);
}