const bubbleContainer = document.getElementById('bubble-container');
const scoreDisplay = document.getElementById('score');
let score = 0;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.5)`;
}

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 50 + 10 + 'px';
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.backgroundColor = getRandomColor();
    bubble.style.animationDuration = Math.random() * 5 + 5 + 's';
    bubbleContainer.appendChild(bubble);

    bubble.addEventListener('click', () => {
        bubble.remove();
        score++;
        scoreDisplay.textContent = score;
    });

    setTimeout(() => {
        bubble.remove();
    }, 10000);
}

setInterval(createBubble, 500);
