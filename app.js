/* eslint-disable indent */
gsap.registerPlugin(ScrollTrigger);

const project = document.querySelector('.project');

gsap.to(project, {
	scrollTrigger: {
		trigger: project,
		start: 'top center',
		toggleActions: 'restart none none pause',
	},
	x: 200,
	duration: 2,
});
