function createButton ($container, msg) {

	var $btn = document.createElement('button');

	$btn.style.height = '100px';
	$btn.style.width = '100px';
	$btn.textContent = msg;

	// var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	// var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	$container.appendChild($btn);
}

function buttonMove(e, $btn) {
		var posWidth = (e.pageX - 50),
			posHeight = (e.pageY - 50);

		$btn.style.transition = 'all 0.5s ease-out';
		$btn.style.transform = 'translate(' + posWidth + 'px,' + posHeight + 'px)';
}

createButton(document.querySelector('body'), 'Click Me!');

window.onmousemove = function (e) {
	buttonMove(e, document.querySelector('button'));
};


function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
