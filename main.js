// Create bubble container
const bubbleContainer = document.createElement('div');
bubbleContainer.classList.add('bubble-container');
document.body.appendChild(bubbleContainer);

function getRandomColor() {
    // Using colors similar to rgba(32, 33, 52, 0.585) with different opacity
    const colors = [
        'rgba(32, 33, 52, 0.2)', // Dark Slate with light opacity
        'rgba(44, 46, 69, 0.2)', // Slightly lighter dark slate
        'rgba(48, 49, 77, 0.2)', // Darker greyish-blue
        'rgba(24, 25, 40, 0.2)', // Even darker for variety
        'rgba(30, 31, 55, 0.2)'  // Another variant of dark slate
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 50 + 20 + 'px'; // Size range from 20px to 70px
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.top = Math.random() * 100 + 'vh'; // Added vertical positioning
    bubble.style.backgroundColor = getRandomColor();
    bubble.style.animationDuration = Math.random() * 5 + 5 + 's';
    bubbleContainer.appendChild(bubble);

    // Optional: Remove bubble after its animation is complete
    setTimeout(() => {
        bubble.remove();
    }, 10000); // Duration should be long enough to match or exceed animation duration
}

// Create bubbles at regular intervals
setInterval(createBubble, 500);
