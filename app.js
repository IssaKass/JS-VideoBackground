// preloader
const preloader = document.getElementById("preloader");

window.addEventListener("load", function () {
  preloader.remove();
});

// video
const video = document.getElementById("video");
const switchBtn = document.getElementById("switch-btn");

switchBtn.addEventListener("click", function () {
  switchBtn.classList.toggle("slide");
  toggleVideo(video);
});

function toggleVideo(video) {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}
