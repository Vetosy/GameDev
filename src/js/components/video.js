const videoBlogs = document.querySelectorAll('.video-block');

videoBlogs.forEach(function (videoBlog) {
  const video = videoBlog.querySelector('video');
  const playBtn = videoBlog.querySelector('.video-block__play');

  playBtn.addEventListener('click', () => {
    videoBlog.classList.add('video-block--played');
    video.play();
    video.controls = true;
    playBtn.classList.add('video-block__play--played');
  });

  video.onpause = function () {
    videoBlog.classList.remove('video-block--played');
    video.controls = false;
    playBtn.classList.remove('video-block__play--played');
  };
});
