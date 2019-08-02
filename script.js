// Changing Header Text

const dateTime = new Date();
const hours = dateTime.getHours();

if (hours >= 17) {
	document.getElementById('salutation').innerHTML = 'Good Evening!';
} else if (hours >= 12) {
	document.getElementById('salutation').innerHTML = 'Good Afternoon!';
} else {
	document.getElementById('salutation').innerHTML = 'Good Morning!';
}

// Animate On Scroll

const imageList = document.querySelectorAll('.animate-me');

function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this,
			args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

function addAnimation() {
	imageList.forEach(image => {
		let elementTop = image.getBoundingClientRect().top;
		let windowBottom = document.body.clientHeight;
		if (elementTop < windowBottom) {
			image.classList.add('scrolled-to');
		}
	});

	// const element = document.getElementById('animate-me');
	// const elementTop = element.getBoundingClientRect().top;
	// const windowBottom = document.body.clientHeight;
	// if (elementTop < windowBottom) {
	// 	element.classList.add('scrolled-to');
	// }
}

document.body.addEventListener('scroll', debounce(addAnimation));
