(() => {
  const audioElem = document.querySelector('audio');
  const playBtnElem = document.querySelector('.play');
  const progressBarElem = document.querySelector('.progress-bar');
  const startTimeElem = document.querySelector('.start-time');
  const endTimeElem = document.querySelector('.end-time');

  function onClick() {
    if (audioElem.paused) {
      audioElem.play();
      playBtnElem.className = 'pause';
    } else {
      audioElem.pause();
      playBtnElem.className = 'play';
    }
  }

  function getDuration(time) {
    const minutes = Math.floor((time / 60) % 60).toString();
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  function onTimeUpdate() {
    startTimeElem.innerHTML = getDuration(audioElem.currentTime);
    progressBarElem.value = audioElem.currentTime;
  }

  function onLoadedData() {
    endTimeElem.innerHTML = getDuration(audioElem.duration);
    progressBarElem.max = audioElem.duration;
  }

  function onEnded() {
    playBtnElem.className = 'play';
  }

  function onProgressInput(e) {
    audioElem.currentTime = progressBarElem.value;
  }

  function run() {
    audioElem.volume = 0.05;
    playBtnElem.addEventListener('click', onClick);

    audioElem.addEventListener('timeupdate', onTimeUpdate);
    audioElem.addEventListener('loadeddata', onLoadedData);
    audioElem.addEventListener('ended', onEnded);

    progressBarElem.addEventListener('input', onProgressInput);
  }

  run();
})();
