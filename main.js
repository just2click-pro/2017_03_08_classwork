function createButton ($container, msg) {

	var $btn = document.createElement('button');
	$btn.style.height = '100px';
	$btn.style.width = '100px';
	$btn.textContent = msg;

	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	$btn.onmouseenter = function () {
		var posWidth = getRandomInt(0, w - 100),
			posHeight = getRandomInt(0, h - 100);

		this.style.transition = 'all 0.5s ease-out';
		this.style.transform = 'translate(' + posWidth + 'px,' + posHeight + 'px)';
	};

	$container.appendChild($btn);
}

var $btn = createButton(document.querySelector('.container'), 'Click Me!');

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
