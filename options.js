const clicksound = document.getElementById("clicksound");
document.addEventListener('click', function() {
    const buttonCheck = event.target.closest('button, a');

    if (buttonCheck) {
        clicksound.volume = 1.0;
        clicksound.play();
    }

    if (buttonCheck.tagName === "A") {
        const href = buttonCheck.getAttribute("href");
        if (href && !href.startsWith("#") && buttonCheck.target !== "_blank") {
            event.preventDefault();
            setTimeout(() => {
                window.location.href = href;
            }, 250);
        }
    }
});

const panoramaStorageKey = "selectedPanoramaUrl";

function applyPanorama(imgSrc) {
    if (!imgSrc) return;
    const cssUrl = `url("${imgSrc}")`;
    document.documentElement.style.setProperty("--panorama-bg", cssUrl);
    localStorage.setItem(panoramaStorageKey, cssUrl);
}

document.querySelectorAll(".panoramaOption").forEach((button) => {
    button.addEventListener("click", () => {
        const img = button.querySelector("img");
        const targetUrl = button.dataset.href || "index.html";
        if (!img) return;

        const imgPath = img.getAttribute("src");
        applyPanorama(imgPath);
        
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 250);
    });
});