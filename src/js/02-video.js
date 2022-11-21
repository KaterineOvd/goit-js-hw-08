import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY = 'videoplayer-current-time';


function onPlay(data) {
  localStorage.setItem(KEY, data.seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));


player.setCurrentTime(localStorage.getItem(KEY) || 0);


