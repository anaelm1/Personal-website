const clicksound = document.getElementById("clicksound");
document.addEventListener('click', function() {
    const buttonCheck = event.target.closest('button, a');

    if (buttonCheck) {
        clicksound.volume = 1.0;
        clicksound.play();
    }
});

const worldItems = document.querySelectorAll('.worldItem');
const repoBtn = document.getElementById('repoBtn');
const demoBtn = document.getElementById('demoBtn');

let activeWorld = document.querySelector('.worldItem.selected') || worldItems[0];

function pickWorld(item) {
    worldItems.forEach(row => row.classList.remove('selected'));
    item.classList.add('selected');
    activeWorld = item;
}

function openrepo() {
    if (!activeWorld) return;
    const repolink = activeWorld.dataset.repo;
    if (repolink && repolink !== '#') {
        window.open(repolink, '_blank', 'noopener,noreferrer');
    }
}

function opendemo() {
    if (!activeWorld) return;
    const demolink = activeWorld.dataset.demo;
    if (demolink && demolink !=="#") {
        window.open(demolink, '_blank', 'noopener,noreferrer');
    }
}

worldItems.forEach(item => {
    item.addEventListener('click', () => pickWorld(item));
    item.addEventListener('dblclick', () => {
        pickWorld(item);
        openrepo();
    });
});

if (repoBtn) {
    repoBtn.addEventListener('click', openrepo);
}

if (demoBtn) {
    demoBtn.addEventListener('click', opendemo);
}

