const clicksound = document.getElementById("clicksound");
document.addEventListener('click', function() {
    const buttonCheck = event.target.closest('button, a');

    if (buttonCheck) {
        clicksound.volume = 1.0;
        clicksound.play();
    }
});

const projectItems = document.querySelectorAll('.projectItem');
const repoBtn = document.getElementById('repoBtn');
const demoBtn = document.getElementById('demoBtn');

let activeproject = document.querySelector('.projectItem.selected') || projectItems[0];

function pickproject(item) {
    projectItems.forEach(row => row.classList.remove('selected'));
    item.classList.add('selected');
    activeproject = item;
}

function openrepo() {
    if (!activeproject) return;
    const repolink = activeproject.dataset.repo;
    if (repolink && repolink !== '#') {
        window.open(repolink, '_blank', 'noopener,noreferrer');
    }
}

function opendemo() {
    if (!activeproject) return;
    const demolink = activeproject.dataset.demo;
    if (demolink && demolink !=="#") {
        window.open(demolink, '_blank', 'noopener,noreferrer');
    }
}

projectItems.forEach(item => {
    item.addEventListener('click', () => pickproject(item));
    item.addEventListener('dblclick', () => {
        pickproject(item);
        openrepo();
    });
});

if (repoBtn) {
    repoBtn.addEventListener('click', openrepo);
}

if (demoBtn) {
    demoBtn.addEventListener('click', opendemo);
}

