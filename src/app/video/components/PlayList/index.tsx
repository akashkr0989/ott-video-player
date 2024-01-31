import './styles.css';
import PlayListItem from './PlayListItem';
import playListHandler from './handler';

export default function PlayList({ source, playerRef }: any) {
  const { handleItemClick, currentItem } = playListHandler(playerRef);
  return (
    <div className="playlist-container">
      <div className="header">PlayList</div>
      <hr className="divider" />
      <div className="list">
        {source.map((element: any, index: number) => {
          return (
            <PlayListItem
              item={element}
              index={index}
              key={Math.random().toString(36).substring(2, 10)}
              currentItem={index === currentItem}
              clickHandler={handleItemClick}
            />
          );
        })}
      </div>
    </div>
  );
}
