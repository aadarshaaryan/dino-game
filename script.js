let player = document.getElementById('player');
let obstacle = document.getElementById('obstacle');
let btn = document.getElementById('btn');
let timeLeft = 0;
let timerInterval;
let jumping = false;

btn.style.display = 'block'

btn.addEventListener('click', () => {
    wrapper();
    btn.style.display = 'none'
})

function wrapper() {
    obstacle.classList.add('move')
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

    setInterval(() => {
        let playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'));
        let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

        if (obstacleLeft < 200 && obstacleLeft > 170 && playerBottom < 50) {
            alert(`Score: ${timeLeft} | Game Over 💀 | click OK to restart`);
        }
    }, 10);

    document.body.addEventListener('pointerdown', () => {
        jump();
    });

    timerInterval = setInterval(() => {
        timeLeft++;
        let p3 = document.getElementById('p3');
        p3.innerHTML = `Score: ${timeLeft}`
    }, 200)
}
