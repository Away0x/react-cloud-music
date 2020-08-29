export default class LyricManager {
  constructor(lrc: string, handler?: Function, speed?: number);

  changeSpeed(speed: number);

  play(offset?: number, isSeek?: boolean);

  togglePlay(offset: number);

  stop();

  seek(offset: number);
}
