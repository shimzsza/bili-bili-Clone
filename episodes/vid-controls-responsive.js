const soloLevelingvid = document.getElementById("solo-leveling");
const playBtnss = document.getElementById('popup-video-buttons');
const playBtnsmiddle = document.getElementById('playbtnmiddle');

// Click the SVG to play video
playBtnsmiddle.addEventListener("click", () => {
  soloLevelingvid.play();
});

// Optional: click external controls
playBtnss.addEventListener("click", () => {
  if (soloLevelingvid.paused) {
    soloLevelingvid.play();
  } else {
    soloLevelingvid.pause();
  }
});

// Show/hide the middle play button based on video state
soloLevelingvid.addEventListener("play", () => {
  playBtnsmiddle.style.display = "none";
});

soloLevelingvid.addEventListener("pause", () => {
  playBtnsmiddle.style.display = "block";
});

soloLevelingvid.addEventListener("ended", () => {
  playBtnsmiddle.style.display = "block";
});


//timestamp
const v = document.getElementById("solo-leveling");
const t = document.getElementById("timestamp");
const r = document.getElementById("range");

v.onloadedmetadata = () => {
  r.max = v.duration;
};

v.ontimeupdate = () => {
  // Update range slider
  r.value = v.currentTime;

  // Update timestamp
  const f = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(Math.floor(s % 60)).padStart(2, '0');
  t.textContent = `${f(v.currentTime)} / ${f(v.duration || 0)}`;
};

// Allow user to scrub through the video
r.oninput = () => {
  v.currentTime = r.value;
};


const playIcon = document.querySelector(".playyyy");

// Play icon path
const playPath = "M275-248v-464q0-29.85 20.64-48.92Q316.29-780 343.48-780q8.68 0 18.1 2.5Q371-775 380-770l365 233q16.5 9 24.25 24.84T777-480q0 16.32-8 32.16Q761-432 745-423L380-190q-9 5-18.64 7.5t-18.22 2.5q-26.85 0-47.5-19.08Q275-218.15 275-248Z";

// Pause icon path
const pausePath = "M312-200q-17 0-28.5-11.5T272-240v-480q0-17 11.5-28.5T312-760q17 0 28.5 11.5T352-720v480q0 17-11.5 28.5T312-200Zm336 0q-17 0-28.5-11.5T608-240v-480q0-17 11.5-28.5T648-760q17 0 28.5 11.5T688-720v480q0 17-11.5 28.5T648-200Z";

// Change icon on play
soloLevelingvid.addEventListener("play", () => {
  playIcon.querySelector("path").setAttribute("d", pausePath);
});

// Change icon on pause or end
soloLevelingvid.addEventListener("pause", () => {
  playIcon.querySelector("path").setAttribute("d", playPath);
});
soloLevelingvid.addEventListener("ended", () => {
  playIcon.querySelector("path").setAttribute("d", playPath);
});

