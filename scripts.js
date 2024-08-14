  // Create bubble container
  const bubbleContainer = document.createElement('div');
  bubbleContainer.classList.add('bubble-container');
  document.body.appendChild(bubbleContainer);

  function getRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgba(${r}, ${g}, ${b}, 0.1)`;
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

      // Optional: Remove bubble after its animation is complete
      setTimeout(() => {
          bubble.remove();
      }, 10000); // Duration should be long enough to match or exceed animation duration
  }

  // Create bubbles at regular intervals
  setInterval(createBubble, 500);