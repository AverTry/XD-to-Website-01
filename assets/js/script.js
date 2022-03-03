const navPos = getComputedStyle(document.documentElement).getPropertyValue('--navPos')
const navbar = document.querySelector('nav')
const logo = document.querySelector('.logo')
const ocean = document.querySelector('.ocean')
const animLink = document.querySelector('.journeyAnimContainer')
const journeyStarting = document.querySelector('#journeyStarting')
window.onscroll = () => {
	window.scrollY > navPos ? navbar.classList.add('navShrink') : navbar.classList.remove('navShrink')
}
logo.onclick = () => navbar.classList.toggle('mobile')
window.onload = () => {
	animLink.onclick = () => {
		journeyStarting.innerText = 'Starting Your Journey...'
		ocean.classList.add('runAnim')
		setTimeout(() => (location = './journey.html'), 5000)
	}
}
