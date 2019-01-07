'use strict';

function registerPassthroughAnimator() {
  return runInAnimationWorklet(`
    registerAnimator('passthrough', class {
      animate(currentTime, effect) { effect.localTime = currentTime; }
    });
  `);
}


function runInAnimationWorklet(code) {
  return CSS.animationWorklet.addModule(
    URL.createObjectURL(new Blob([code], {type: 'text/javascript'}))
  );
}



