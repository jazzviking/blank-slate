'use strict';

const scoreBubbles = document.querySelectorAll('.score_bubble');

const toggleScoreBubble = (e) => {
  const activeLocation =
    e.target.parentElement.querySelectorAll('.score_bubble');
  let index = Array.from(activeLocation).indexOf(e.target);

  if (e.target.className === 'score_bubble active') {
    //deactivate bubble and bubbles to right
    activeLocation.forEach((el, x) => {
      x >= index && el.classList.remove('active');
    });
  } else {
    //activate bubble and bubbles to left
    activeLocation.forEach((el, x) => {
      x <= index && el.classList.add('active');
    });
  }
};

scoreBubbles.forEach((bubble) =>
  bubble.addEventListener('click', toggleScoreBubble)
);
