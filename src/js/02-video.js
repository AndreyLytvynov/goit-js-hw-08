import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('.iframe');
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(CURRENT_TIME));

function getCurrentTime(e) {
  localStorage.setItem(CURRENT_TIME, `${e.seconds}`);
}

player.on('timeupdate', throttle(getCurrentTime, 1000));
