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
      onChangePlayMode={changePlayMode}
      onToggleFullScreen={changeFullScreen}
      onPlayButtonClick={changePlaying}
      onCleanList={() => {
        changePlayList([]);
        changePlaying(false);
        changeCurrentSongIndex(-1);
      }}
      onError={emitShowToastGlobalEvent}
    />
  );
}

export default React.memo(Player);
