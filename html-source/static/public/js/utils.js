export function expandRooms() {
	const el = document.getElementById('dropdown-content');
	el.classList.toggle('show');
}
export function setCurrentDate() {
	const date = new Date().getFullYear();
	const dateSpan = document.getElementById('date');
	dateSpan.innerHTML = date;
}
