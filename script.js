let player = document.getElementById('player');
let obstacle = document.getElementById('obstacle');
let btn = document.getElementById('btn');
let p4 = document.getElementById('p4');
let sky = document.querySelector('.gameArea');
let speed = 2;
let timeLeft = 0;
let timerInterval;
let jumping = false;

btn.style.display = 'block'

btn.addEventListener('click', () => {
    wrapper();
    btn.style.display = 'none'
    p4.style.visibility = 'hidden'
})

function wrapper() {
    sky.style.animation = `bgMove ${speed}s linear infinite`

    obstacle.classList.add('move');
    let moveSpeed = document.querySelector('.move');
    moveSpeed.style.animation = `move ${speed}s linear infinite`;

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
            clearInterval(timerInterval);
            alert(`Score: ${timeLeft} | Game Over 💀 | click OK to continue`);
            location.reload();
        }

        if (timeLeft >= 250) {
            obstacle.style.animationDuration = '1.5s'
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

let buttons = document.querySelectorAll(".sp");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        buttons.forEach(b => b.classList.remove("active"));

        btn.classList.add("active");
    });
    btn.addEventListener('click',()=>{
        speed = btn.innerHTML;
    })
});
