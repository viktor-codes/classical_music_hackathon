const initApp = () => {
	const hamburgerBtn = document.getElementById('hamburger-button')
	const mobileMenu = document.getElementById('mobile-menu')

	const togleMenu = () => {
		mobileMenu.classList.toggle('hidden')
		mobileMenu.classList.toggle('flex')
		hamburgerBtn.classList.toggle('toggle-btn')
	}

	hamburgerBtn.addEventListener('click', togleMenu)
	mobileMenu.addEventListener('click', togleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)
