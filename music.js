document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio");
  const playButton = document.getElementById("play");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const playlist = document.getElementById("playlist");
  const tracks = playlist.getElementsByTagName("li");

  let currentTrack = 0;

  const trackList = [
    "128-Dil Ka Aalam - Aashiqui 128 Kbps.mp3",
    "128-Har Ek Muskurahat - Ankhon Mein Tum Ho 128 Kbps.mp3",
    "128-Khokhe - Mankirt Aulakh 128 Kbps.mp3",
    "128-Lehnga - Diljit Dosanjh 128 Kbps.mp3",
    "128-Tere Ishq Mein Naachenge - Raja Hindustani 128 Kbps.mp3",
  ];

  function loadTrack(index) {
    audio.src = trackList[index];
    highlightTrack(index);
  }

  function highlightTrack(index) {
    for (let i = 0; i < tracks.length; i++) {
      tracks[i].classList.remove("active");
    }
    tracks[index].classList.add("active");
  }

  playButton.addEventListener("click", () => {
    if (playButton.textContent === "Play" && audio.paused) {
      audio.play();
      playButton.innerHTML = "Pause";
    } else {
      audio.pause();
      playButton.innerHTML = "Play";
    }
  });

  prevButton.addEventListener("click", () => {
    currentTrack = (currentTrack - 1 + trackList.length) % trackList.length;
    loadTrack(currentTrack);
    audio.play();
  });

  nextButton.addEventListener("click", () => {
    currentTrack = (currentTrack + 1) % trackList.length;
    loadTrack(currentTrack);
    audio.play();
  });

  playlist.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      currentTrack = Array.from(tracks).indexOf(event.target);
      loadTrack(currentTrack);
      audio.play();
    }
  });

  audio.addEventListener("ended", () => {
    currentTrack = (currentTrack + 1) % trackList.length;
    loadTrack(currentTrack);
    audio.play();
  });

  loadTrack(currentTrack);
});
