import { expandRooms, setCurrentDate } from './utils.js';

setCurrentDate();

document.getElementById('roomLink').addEventListener('click', () => {
	expandRooms();
});
