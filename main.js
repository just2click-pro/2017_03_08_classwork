function createButton ($container, msg) {

	var $btn = document.createElement('button');
	$btn.style.height = '100px';
	$btn.style.width = '100px';
	$btn.textContent = msg;

	$container.appendChild($btn);

	return $btn;
}

function moveButton($btn) {
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	var posWidth = getRandomInt(0, w - 100),
		posHeight = getRandomInt(0, h - 100);

	$btn.style.transition = 'all 0.5s ease-out';
	$btn.style.transform = 'translate(' + posWidth + 'px,' + posHeight + 'px)';
}

var $btn = createButton(document.querySelector('.container'), 'Click Me!');

$btn.addEventListener('mouseenter', function () {
	moveButton($btn);
});

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
