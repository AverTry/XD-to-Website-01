const navPos = getComputedStyle(document.documentElement).getPropertyValue('--navPos')
const navbar = document.querySelector('nav')
const ocean = document.querySelector('.ocean')
const animLink = document.querySelector('.journeyAnimContainer')
const journeyStarting = document.querySelector('#journeyStarting')
window.onscroll = () => { 
  window.scrollY > navPos 
  ? navbar.classList.add('navShrink') 
  : navbar.classList.remove('navShrink') 
}
navbar.onclick = () => navbar.classList.toggle('mobile')
animLink.onclick = () => {
  journeyStarting.innerText = 'Starting Your Journey...'
  ocean.classList.add('runAnim')
  setTimeout(() => location ='./journey.html', 5000)
}