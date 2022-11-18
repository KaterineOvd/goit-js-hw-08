import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY = 'videoplayer-current-time';


function onPlay(time) {
  localStorage.setItem(KEY, time.seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(KEY));


