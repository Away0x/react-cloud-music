import React, { useCallback, useState, useMemo, useRef, useEffect } from 'react';

import { getSongUrl } from 'tools/song';
import { PlayMode } from 'constants/player';

import MiniPlayer from './MiniPlayer';
import NormalPlayer from './NormalPlayer';
import StyledPlayer from './style';

interface PlayerProps {
  mode?: PlayMode;
  fullScreen?: boolean;
  playing?: boolean;
  currentSong: Data.SongListItem;
  currentSongIndex: number;
  playList: Data.SongListItem[];
  onPlayButtonClick?: (status: boolean) => void;
  onToggleFullScreen?: (status: boolean) => void;
  onChangePlayMode?: (mode: PlayMode) => void;
}

function Player({
  mode = PlayMode.loop,
  fullScreen = false,
  playing = false,
  currentSong,
  currentSongIndex,
  playList,
  onPlayButtonClick,
  onToggleFullScreen,
  onChangePlayMode,
}: PlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const songReady = useRef(true);

  // const [preSong, setPreSong] = useState<Data.SongListItem | null>(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const percent = useMemo(() => {
    return currentTime / duration;
  }, [currentTime, duration]);

  const handleMiniPlayerContainerClick = useCallback(() => {
    onToggleFullScreen && onToggleFullScreen(true);
  }, [onToggleFullScreen]);

  const handleNormalPlayerBackButtonClick = useCallback(() => {
    onToggleFullScreen && onToggleFullScreen(false);
  }, [onToggleFullScreen]);

  const handleAudioUpdateTime = useCallback((ev: any) => {
    setCurrentTime(ev.target.currentTime);
  }, []);

  const handleAudioEnded = useCallback(() => {}, []);

  const handleAudioError = useCallback(() => {}, []);

  useEffect(() => {
    if (!currentSong || !songReady.current || !audioRef.current) return;

    songReady.current = false;
    audioRef.current.src = getSongUrl(currentSong.id);
    audioRef.current.autoplay = true;

    setCurrentTime(0);
    setDuration((currentSong.dt / 1000) | 0);
  }, [currentSong]);

  useEffect(() => {
    if (!audioRef.current) return;
    playing ? audioRef.current.play() : audioRef.current.pause();
  }, [playing]);

  return (
    <StyledPlayer>
      <MiniPlayer
        show={!fullScreen}
        playing={playing}
        song={currentSong}
        percent={percent}
        onContainerClick={handleMiniPlayerContainerClick}
        onPlayButtonClick={onPlayButtonClick}
      />
      <NormalPlayer
        mode={mode}
        show={fullScreen}
        playing={playing}
        song={currentSong}
        percent={percent}
        duration={duration}
        currentTime={currentTime}
        onBackButtonClick={handleNormalPlayerBackButtonClick}
        onPlayButtonClick={onPlayButtonClick}
      />

      <audio
        ref={audioRef}
        onTimeUpdate={handleAudioUpdateTime}
        onEnded={handleAudioEnded}
        onError={handleAudioError}
      />
    </StyledPlayer>
  );
}

export default React.memo(Player);
