function isOnScreen(e) {
	let rect = e.getBoundingClientRect()
	let clientHeight = document.documentElement.clientHeight
	let viewHeight = Math.max(clientHeight, window.innerHeight)
	return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
}

const elements = document.querySelectorAll('[test-onscreen]')

window.onscroll = () => {
	elements.forEach((e) => {
		e.setAttribute('is-onscreen', isOnScreen(e))
		e.setAttribute(
			'once-onscreen', 
			e.getAttribute('once-onscreen') == 'true' || isOnScreen(e)
		)
	})
};