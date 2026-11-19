const clicksound = document.getElementById("clicksound");
document.addEventListener('click', function() {
    const buttonCheck = event.target.closest('button, a');

    if (buttonCheck) {
        clicksound.volume = 1.0;
        clicksound.play();
    }
});

const worldItems = document.querySelectorAll('.worldItem');
const playBtn = document.getElementById('playBtn');
const editBtn = document.getElementById('editBtn');

let activeWorld = document.querySelector('.worldItem.selected') || worldItems[0];

function pickWorld(item) {
    worldItems.forEach(row => row.classList.remove('selected'));
    item.classList.add('selected');
    activeWorld = item;
}

function openWorld() {
    if (!activeWorld) return;
    const link = activeWorld.dataset.url;
    if (link && link !== '#') {
        window.open(link, '_blank', 'noopener,noreferrer');
    }
}

worldItems.forEach(item => {
    item.addEventListener('click', () => pickWorld(item));
    item.addEventListener('dblclick', () => {
        pickWorld(item);
        openWorld();
    });
});

if (playBtn) {
    playBtn.addEventListener('click', openWorld);
}

