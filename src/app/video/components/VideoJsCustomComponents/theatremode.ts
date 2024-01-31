import Images from '@/app/constants/icon';
import videojs from 'video.js';

export default function theatreMode(playerRef: any) {
  const Button = videojs.getComponent('Button') as any;
  const buttonConfig = {
    clickHandler(event: any) {
      console.log('clicked', event);
    },
  };
  const theatreModeControl = new Button(playerRef, buttonConfig);
  playerRef.getChild('ControlBar').addChild(
    'button',
    {
      controlText: 'Theatre Mode',
      className: 'vjs-theatre-mode',
    },
    18,
  );
  const iconElement: any = document.querySelector('.vjs-theatre-mode .vjs-icon-placeholder');
  iconElement.innerHTML = Images.theatreMode;
  iconElement.addEventListener('click', () => {
  });
  return theatreModeControl;
}
