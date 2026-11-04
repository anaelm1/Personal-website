const canvas = document.getElementById("bgCanvas");

let timeProgress = 0; //for day night. 0 is day 1 is night

function animate() {
    timeProgress += 0.0005;

    if (timeProgress > 1) {
        timeProgress = 0;
    
    }

    
}