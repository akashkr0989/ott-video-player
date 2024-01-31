import { useState } from 'react';

const playListHandler = (playerRef: any) => {
  const [currentItem, setCurrentItem] = useState(0);
  playerRef?.current?.on('play', () => {
    setCurrentItem(playerRef.current.playlist.currentItem());
  });
  const handleItemClick = (index: number) => {
    playerRef.current.playlist.currentItem(index);
  };
  return { handleItemClick, currentItem };
};
export default playListHandler;
