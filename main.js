var timer = 60;
var score = 0;
var hitrn = 0;

function createbubble() {
    var bubble = "";

    for (var i = 1; i <= 140; i++) {
        var rn = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector(".pbtm").innerHTML = bubble;
}

function gethit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function runtimer() {

    var timeint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }

        else {
            document.querySelector(".pbtm").innerHTML = `<h1> Game over </h1>`;
            clearInterval(timeint);
        }
    }, 1000);
}

function increasescore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector(".pbtm").addEventListener("click", function (dets) {
    var clickbtn = (Number(dets.target.textContent));

    if (clickbtn == hitrn) {
        increasescore();
        createbubble();
        gethit();
    }
})

increasescore();
gethit();
runtimer();
createbubble();