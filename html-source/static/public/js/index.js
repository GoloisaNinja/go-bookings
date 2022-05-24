import { expandRooms, setCurrentDate } from './utils.js';

setCurrentDate();

document.getElementById('roomLink').addEventListener('click', () => {
	expandRooms();
});

controlListeners();

// Carousel functions

var imgPosition = 1;

manageCarousel(imgPosition);

function setCurrentSlide(n) {
	imgPosition = n;
	manageCarousel(n);
}

function manageCarousel(n) {
	const images = document.getElementsByClassName('img-container');
	const controls = document.getElementsByClassName('rect');

	for (let i = 0; i < images.length; i++) {
		images[i].style.display = 'none';
	}
	for (let i = 0; i < controls.length; i++) {
		controls[i].className = controls[i].className.replace(' enable', '');
	}
	images[imgPosition - 1].style.display = 'block';
	controls[imgPosition - 1].className += ' enable';
	firstLoad = false;
}

// Add listeners to my image controls for carousel

function controlListeners() {
	const controls = document.getElementsByClassName('rect');
	for (let i = 0; i < controls.length; i++) {
		controls[i].addEventListener('click', () => {
			setCurrentSlide(parseInt(controls[i].dataset.position));
		});
	}
}
