const defaultOptions: any = {
  autoplay: true,
  controls: true,
  muted: true,
  playbackRates: [0.5, 1, 1.5, 2],
  responsive: true,
  // fluid: true,
  fill: true,
  preload: 'auto',
  controlBar: {
    remainingTimeDisplay: { displayNegative: false },
    fullscreenToggle: true,
    pictureInPictureToggle: true,
    playToggle: true,
    volumePanel: {
      inline: false,
    },
    currentTimeDisplay: true,
    timeDivider: true,
    durationDisplay: true,
    progressControl: {
      seekBar: {
        loadProgressBar: true,
        mouseTimeDisplay: true,
        playProgressBar: true,
      },
    },
  },
  userActions: { hotkeys: true, doubleClick: true },
  disablePictureInPicture: false,
  theatreMode: true,
  plugins: {
    seekButtons: {
      backIndex: 0,
      forward: 10,
      back: 10,
    },
    httpSourceSelector8V: {
      default: 'auto',
    },
  },
  reelMode: false,
  seekForwardDisplay: true,
  seekBackwardDisplay: true,
  playlist: true,
  qualitySelector: true,
};

export default defaultOptions;
