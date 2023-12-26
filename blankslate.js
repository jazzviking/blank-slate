'use strict';

const scoreBubbles = document.querySelectorAll('.score_bubble');

const toggleScoreBubble = (e) => {
  let activeLocationIndex;
  e.target.classList.toggle('active');

  const activeLocation = document.querySelectorAll('.score_bubble');
  console.log(activeLocation);
};

scoreBubbles.forEach((bubble) =>
  bubble.addEventListener('click', toggleScoreBubble)
);

// fixed?
