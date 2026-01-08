
let clicks = 0;

const gif = document.getElementById('gif');
const playScreen = document.getElementById('playScreen');
const gifScreen = document.getElementById('gifScreen');
const audio = document.getElementById('audio');

function start() {
  playScreen.style.display = 'none';
  gifScreen.style.display = 'flex';
  audio.play();
}

gif.addEventListener('click', () => {
  clicks++;
  gif.style.transform = `scale(${1 + clicks * 0.8})`;
  if (clicks >= 5) {
    window.location.href = 'page1.html';
  }
});
