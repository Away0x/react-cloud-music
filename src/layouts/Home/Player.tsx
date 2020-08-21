import React from 'react';

import PlayerContainer from 'containers/PlayerContainer';
import PlayerComponent from 'components/Player';
import { emitShowToastGlobalEvent } from 'events/global';

function Player() {
  const {
    mode,
    fullScreen,
    playing,
    currentIndex,
    currentSong,
    playList,
    speed,
    changePlayMode,
    changeFullScreen,
    changePlaying,
    changePlayList,
    changeCurrentSongIndex,
    deleteSong,
    changeSpeed,
  } = PlayerContainer.useContainer();

  return (
    <PlayerComponent
      mode={mode}
      fullScreen={fullScreen}
      playing={playing}
      currentSongIndex={currentIndex}
      currentSong={currentSong}
      speed={speed}
      playList={playList}
      onPlayButtonClick={changePlaying}
      onToggleFullScreen={changeFullScreen}
      onChangePlayMode={changePlayMode}
      onDeleteItemSong={(_, index) => deleteSong(index)}
      onSelectItemSong={(_, index) => changeCurrentSongIndex(index)}
      onCleanList={() => {
        changePlayList([]);
        changePlaying(false);
      }}
      onSelectSpeed={changeSpeed}
      onError={(msg) => {
        emitShowToastGlobalEvent(msg);
      }}
    />
  );
}

export default React.memo(Player);
