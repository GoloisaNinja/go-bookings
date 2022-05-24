const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const checkAvailBtn = document.getElementById('btn-availability');
const closeModalBtn = document.getElementById('close-btn');

const handleModal = (show) => {
	if (show) {
		overlay.classList.add('show');
		modal.classList.add('show');
	} else {
		overlay.classList.remove('show');
		modal.classList.remove('show');
	}
}

checkAvailBtn.addEventListener('click', () => {
	handleModal(true);
})
overlay.addEventListener('click', () => {
	handleModal();
})
closeModalBtn.addEventListener('click', () => {
	handleModal();
})
