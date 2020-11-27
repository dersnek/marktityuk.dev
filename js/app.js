document.addEventListener('DOMContentLoaded', initAnim);

function initAnim() {
	var vsOpts = {
		slides: document.getElementsByClassName('v-slide'),
		list: document.getElementsByClassName('v-slides')[0],
		duration: 7,
		lineHeight: 64
	};

	var vSlide = gsap.timeline({
		paused: true,
		repeat: -1
	});

	for (var i = 0; i < vsOpts.slides.length; i++) {
		var duration = vsOpts.duration / vsOpts.slides.length;
		if (i == 0) {
			duration = 0;
		}
		vSlide.to(vsOpts.list, duration, {
			y: i * -1 * vsOpts.lineHeight,
			ease: Elastic.easeOut.config(0.4, 0.4)
		});
	}

	vSlide.play();
}