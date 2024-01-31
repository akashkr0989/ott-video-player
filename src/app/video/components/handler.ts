import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import theatreMode from './VideoJsCustomComponents/theatremode';

const updateControlOptions = (player: any, playerOptions: any) => {
  // Control Bar Toggle
  if (playerOptions && playerOptions.controlBar) {
    player.controls(playerOptions.controls);
    // Play Pause Control Toggle
    if (playerOptions.controlBar?.playToggle) {
      player.controlBar.playToggle.show();
    } else {
      player.controlBar.playToggle.hide();
    }

    // Volume Control Toggle
    if (playerOptions.controlBar.volumePanel) {
      player.controlBar.volumePanel.show();
    } else {
      player.controlBar.volumePanel.hide();
    }

    // SeekBar Control Toggle
    if (playerOptions.controlBar?.progressControl?.seekBar) {
      player.controlBar.progressControl.show();
    } else {
      player.controlBar.progressControl.hide();
    }

    // Remaining Time Display Control Toggle
    if (playerOptions.controlBar?.remainingTimeDisplay) {
      player.controlBar.remainingTimeDisplay.show();
    } else {
      player.controlBar.remainingTimeDisplay.hide();
    }

    // Backward Seek Button Control Toggle
    if (playerOptions.seekBackwardDisplay) {
      // Plugin Controls can hidden by the entry in the controlBar Object
      player.controlBar.seekBack?.show();
    } else {
      player.controlBar.seekBack?.hide();
    }

    // Backward Speed Control Setter
    player.controlBar.seekBack?.options({
      seconds: Number(playerOptions.plugins.seekButtons.back) || 10,
    });

    // Backward Speed Control Text
    player.controlBar.seekBack?.controlText(
      `Seek back ${Number(playerOptions.plugins.seekButtons.back) || 10} seconds`,
    );

    // Forward Seek Button Control Toggle
    if (playerOptions.seekForwardDisplay) {
      player.controlBar.seekForward?.show();
    } else {
      player.controlBar.seekForward?.hide();
    }

    // Forward Speed Control Setter
    player.controlBar.seekForward?.options({
      seconds: Number(playerOptions.plugins.seekButtons.forward || 10),
    });

    // Forward Speed Control Text
    player.controlBar.seekForward?.controlText(
      `Seek forward ${Number(playerOptions.plugins.seekButtons.forward) || 10} seconds`,
    );

    // Video Speed Control Toggle
    if (playerOptions.playbackRates) {
      player.controlBar.playbackRateMenuButton.show();
    } else {
      player.controlBar.playbackRateMenuButton.hide();
    }

    // Video Speed Control Setter
    if (playerOptions.playbackRates) {
      player.playbackRates(playerOptions.playbackRates);
    }

    // PIP Mode Toggle
    if (playerOptions.controlBar.pictureInPictureToggle) {
      player.controlBar.pictureInPictureToggle.show();
    } else {
      player.controlBar.pictureInPictureToggle.hide();
    }

    // Fullscreen Mode Toggle
    if (playerOptions.controlBar.fullscreenToggle) {
      player.controlBar.fullscreenToggle.show();
    } else {
      player.controlBar.fullscreenToggle.hide();
    }

    // Theatre Mode Mode Toggle
    if (playerOptions.theatreMode) {
      player.controlBar.getChild('Button').show();
    } else {
      player.controlBar.getChild('Button').hide();
    }

    if (player.controlBar.getChild('SourceMenuButton')) {
      if (playerOptions?.qualitySelector) {
        player.controlBar.getChild('SourceMenuButton').show();
      } else {
        player.controlBar.getChild('SourceMenuButton').hide();
      }
    }
  }
};

const setVideoPlayer = ({ videoRef, playerRef, source, onReady, options }: any) => {
  if (!playerRef.current) {
    playerRef.current = videojs(videoRef.current, options, () => {
      if (onReady) {
        onReady(playerRef.current, videojs);
      }
    });
    playerRef.current.playlist(source instanceof Array ? source : [source]);
    // playerRef.current.httpQualitySelector();
    playerRef.current.playlist.autoadvance(1);
    playerRef.current.playlist.repeat(true);
    playerRef.current.autoplay();
    theatreMode(videojs(playerRef.current.id()));
    if (localStorage.getItem('currentMediaId') && localStorage.getItem('currentTime')) {
      const currentIndex = source
        .map((e: any) => e.contentId)
        .indexOf(localStorage.getItem('currentMediaId'));
      playerRef.current.playlist.currentItem(currentIndex);
      playerRef.current.currentTime(Number(localStorage.getItem('currentTime')));
    }
  } else {
    updateControlOptions(playerRef.current, options);
    playerRef.current.playlist(source);
  }
};

const setReelsPlayer = ({ videoRef, playerRef, source, onReady, options }: any) => {
  if (!playerRef.current) {
    playerRef.current = videojs(videoRef.current, options, () => {
      if (onReady) {
        onReady(playerRef.current, videojs);
      }
    });
    playerRef.current.autoplay(false);
    playerRef.current.controls(false);

    playerRef.current.src(source.sources instanceof Array ? source.sources : [source.sources]);
  }
};

const VideoPlayerHandler = (options: any, source: any, onReady: any) => {
  const videoRef = useRef<any>(null);
  const playListRef = useRef<any>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (options.reelMode) {
      setReelsPlayer({ videoRef, playerRef, source, onReady, options });
    } else {
      setVideoPlayer({ videoRef, playerRef, source, onReady, options });
    }
  }, [options, videoRef, source]);
  return {
    videoRef,
    playListRef,
    playerRef,
  };
};

export default VideoPlayerHandler;
