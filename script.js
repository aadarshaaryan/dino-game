let player = document.getElementById('player');

let jumping = false;
function jump() {
    if (jumping) return;

    jumping = true;
    player.classList.add('jump');

    setTimeout(() => {
        player.classList.remove('jump');
        jumping = false;
    }, 1200);
}

document.addEventListener('keydown', (e) => {
    if (e.code === "ArrowUp") {
        jump();
    }
});

let obstacle = document.querySelector('.obstacle');

setInterval(() => {
    let playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

    if (obstacleLeft < 200 && obstacleLeft > 150 && playerBottom < 50) {
        alert("Game Over 💀 | click OK to restart");
    }
}, 10);

document.body.addEventListener('pointerdown', () => {
    jump();
});