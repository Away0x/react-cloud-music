import React from 'react';

import MiniPlayer from './MiniPlayer';
import NormalPlayer from './NormalPlayer';
import PlayerList from './PlayList';
import Player from '.';

export default {
  title: 'Components/Player',
  component: Player,
};

const currentSong: any = {
  al: { picUrl: 'https://p1.music.126.net/JL_id1CFwNJpzgrXwemh4Q==/109951164172892390.jpg' },
  name: '木偶人',
  ar: [{ name: '薛之谦' }],
};

export const DefaultMiniPlayer = () => {
  return (
    <div>
      <MiniPlayer song={currentSong} playing />
    </div>
  );
};

export const DefaultNormalPlayer = () => {
  return (
    <div>
      <NormalPlayer />
    </div>
  );
};

export const DefaultPlayerList = () => {
  return (
    <div>
      <PlayerList />
    </div>
  );
};

export const DefaultPlayer = () => {
  return (
    <div>
      <Player />
    </div>
  );
};
