const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds")
const btnRestart = document.querySelector("#restart")

let contagem = document.querySelector(".points")

const points = setInterval(() => {
    contagem.textContent++
}, 10)

const jump = () => {
    mario.classList.add("jump")
    setTimeout(() => {
        mario.classList.remove("jump")
    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft

    const cloudsPosition = clouds.offsetLeft

    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`

        mario.src = "images/game-over.png"
        mario.style.width = "75px"

        clouds.style.animation = "none";
        clouds.style.left = `${cloudsPosition}px`

        clearInterval(loop)
        clearInterval(points)
    }

}, 10)

document.addEventListener("keydown", jump)

setTimeout(() => {
    pipe.style.animation = "pipe-animation 1.3s infinite linear";
}, 5000);
