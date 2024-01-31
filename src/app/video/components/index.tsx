import React from 'react';
import 'video.js/dist/video-js.css';
import 'videojs-playlist';
// import 'videojs-mobile-ui/dist/videojs-mobile-ui.css';
// import 'videojs-mobile-ui';
// import 'videojs-hotkeys';
import 'videojs-seek-buttons';
import 'videojs-seek-buttons/dist/videojs-seek-buttons.css';
import './styles.css';
import VideoPlayerHandler from './handler';
import PlayList from './PlayList';
import './VideoJsCustomComponents/quality-selector/plugin';

export default function VideoPlayer({
  options,
  onReady,
  source,
  playlistComponent = <PlayList />,
  likeHandler = () => {},
  commentHandler = () => {},
  shareHandler = () => {},
  reportHandler = () => {},
  subscribeHandler = () => {},
}: any) {
  const { videoRef, playerRef } = VideoPlayerHandler(options, source, onReady);
  const newPlayList = React.cloneElement(playlistComponent, {
    source,
    playerRef,
    options,
  });

  return (
    <>
      {!options.reelMode && (
        <section className="video-player-container">
          <div className="video-player" data-vjs-player>
            <video ref={videoRef} className="video-js" />
          </div>
          <div className="playlist">{newPlayList}</div>
        </section>
      )}
      {options.reelMode && (
        <section className="reel-player-container">
          <section className="reel-player">
            <div className="video-player" data-vjs-player>
              <video ref={videoRef} className="video-js" />
            </div>
          </section>
        </section>
      )}
    </>
  );
}
