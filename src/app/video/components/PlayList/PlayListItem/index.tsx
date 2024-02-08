"use client"
import moment from 'moment';
import './styles.css';

function formatTime(duration: number) {
  const videoDuration = moment().startOf('day').seconds(duration);
  return videoDuration.format('mm:ss');
}

export default function PlayListItem({ item, index, currentItem, clickHandler }: any) {
  return (
    <div
      className={`item ${currentItem ? 'selected' : ''}`}
      onClick={() => {
        clickHandler(index);
      }}
    >
      <div className="thumbnail">
        <div>{index + 1}</div>
        <img height="80" width="120px" src={item?.thumbnail[0]?.srcset} alt={item?.name} />
        <div className="duration">{formatTime(item?.duration)}</div>
      </div>
      <div className="body">
        <div>
          <div>{item?.name}</div>
        </div>
      </div>
    </div>
  );
}
