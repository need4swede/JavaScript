// SLIDER
$('li').on('click', function() {
	var self = $(this);
	$('.active').removeClass('active');
	self.addClass('active');
	self.closest('ul').attr('data-mouse', self.data('mouse') + '');
	$('.mouse').removeAttr('class').addClass('mouse ' + self.data('mouse'));
});

// TITLE TEXT
let infoText = document.getElementById('info');

// LIST OF AVAILABLE SELECTIONS
let selectionList = document.querySelectorAll('.selection');

// ADD EVENT LISTENER TO SLIDE CHANGE
selectionList.forEach(ele => {
	ele.addEventListener('click', function(){
		let activeElement = document.querySelector('.active').dataset.mouse;
		updateText(activeElement)
	})
})

// UPDATE TITLE TEXT BASED ON SELECTION
function updateText(element){
	if (element == 'lisa'){
		infoText.innerText = "January 19, 1983"
	}
	if (element == 'macintosh'){
		infoText.innerText = "January 24, 1984"
	}
	if (element == 'adb'){
		infoText.innerText = "March 2, 1987"
	}
	if (element == 'adb2'){
		infoText.innerText = "October 18, 1993"
	}
	if (element == 'imac'){
		infoText.innerText = "August 15, 1998"
	}
	if (element == 'pro'){
		infoText.innerText = "July 19, 2000"
	}
	if (element == 'mighty'){
		infoText.innerText = "August 2, 2005"
	}
	if (element == 'magic'){
		infoText.innerText = "October 20, 2009"
	}
}

// WELCOME MESSAGE
console.log('%cApple Mouse Gallery', 'color:cyan;');
console.log(`%cby Mike Afshari`, 'color:lightgreen;');
console.log(`%cInspired by the work of @joshbader`, 'color:#ffd663;');