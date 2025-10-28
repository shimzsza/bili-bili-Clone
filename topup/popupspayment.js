const popupmaincont1 = document.getElementById('payment-maincont');
const arrowup1 = document.getElementById('arrowup');

const arrowUpSvg = arrowup1.querySelector('.arrow-up');
const arrowDownSvg = arrowup1.querySelector('.arrow-down');



let checkerr = true;

arrowup1.addEventListener('click', function () {
  if (menuChecker) {
    popupmaincont1.style.display = 'none';
    arrowUpSvg.classList.add('hidden');
    arrowDownSvg.classList.remove('hidden');
  } else {
    popupmaincont1.style.display = 'block';
    arrowUpSvg.classList.remove('hidden');
    arrowDownSvg.classList.add('hidden');
  }
  menuChecker = !menuChecker;
});



//popup2
const popupmaincont2 = document.getElementById('payment-maincont2');
const arrowup2 = document.getElementById('arrowup2');
const arrowUpSvg2 = arrowup2.querySelector('.arrow-up2');
const arrowDownSvg2 = arrowup2.querySelector('.arrow-down2');

arrowup2.addEventListener('click', function () {
  if (menuChecker) {
    popupmaincont2.style.display = 'block';
    arrowUpSvg2.classList.remove('hidden');
    arrowDownSvg2.classList.add('hidden');

  } else {
    popupmaincont2.style.display = 'none';
    arrowUpSvg2.classList.add('hidden');
    arrowDownSvg2.classList.remove('hidden');
  }
  menuChecker = !menuChecker;
});



//popup3
const popupmaincont3 = document.getElementById('payment-maincont3');
const arrowup3 = document.getElementById('arrowup3');
const arrowUpSvg3 = arrowup3.querySelector('.arrow-up3');
const arrowDownSvg3 = arrowup3.querySelector('.arrow-down3');


arrowup3.addEventListener('click', function () {
  if (menuChecker) {
    popupmaincont3.style.display = 'block';
    arrowUpSvg3.classList.remove('hidden');
    arrowDownSvg3.classList.add('hidden');

  } else {
    popupmaincont3.style.display = 'none';
    arrowUpSvg3.classList.add('hidden');
    arrowDownSvg3.classList.remove('hidden');
  }
  menuChecker = !menuChecker;
});