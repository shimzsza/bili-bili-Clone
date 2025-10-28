const vidHolder = document.getElementById('video-holder');
const playBtns = document.getElementById('popup-video-buttons');
const btnpop = document.getElementById('btnpop');
const btnpop2 = document.getElementById('btnpop2');

const range = document.getElementById('range');
vidHolder.addEventListener('mouseover', () => {
  playBtns.style.opacity = '1';
  playBtns.style.transform = 'translateY(0)';
  playBtns.style.pointerEvents = 'auto';

  range.style.marginTop = '430px'

  btnpop.style.opacity = '1';
  btnpop2.style.opacity = '1';
  range.style.opacity = '1';
});

vidHolder.addEventListener('mouseleave', () => {
  playBtns.style.opacity = '0';
  playBtns.style.transform = 'translateY(0px)';
  playBtns.style.pointerEvents = 'none';
    range.style.marginTop = '450px'

    btnpop.style.opacity = '0';
    btnpop2.style.opacity = '0';
    range.style.opacity = '0';
});
