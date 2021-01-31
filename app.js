/* eslint-disable indent */
// eslint-disable-next-line no-undef
gsap.registerPlugin(ScrollTrigger);

const project1 = document.querySelector('#project-1');
const project2 = document.querySelector('#project-2');
const project3 = document.querySelector('#project-3');
const project4 = document.querySelector('#project-4');
const loadingIcon = document.querySelector('.loading-icon');
const loadingScreenTop = document.querySelector('.loading-top');
const loadingScreenBot = document.querySelector('.loading-bottom');

const tl = new TimelineMax();

tl.fromTo(loadingIcon, 0.8, { opacity: 0 }, { opacity: 1 })
	.fromTo(loadingIcon, 0.8, { opacity: 1 }, { opacity: 0 })
	.fromTo(loadingIcon, 0.8, { opacity: 0 }, { opacity: 1 })
	.fromTo(loadingIcon, 0.8, { opacity: 1 }, { opacity: 0 })
	.fromTo(
		loadingScreenTop,
		1,
		{ height: '50vh' },
		{ height: 0, display: 'none' }
	)
	.fromTo(
		loadingScreenBot,
		1,
		{ top: '49vh' },
		{ top: '101vh', display: 'none' },
		'-=1'
	);

gsap.from(project1, {
	scrollTrigger: {
		trigger: project1,
		start: 'center 60%',
		toggleActions: 'restart none none reverse',
	},
	x: -50,
	opacity: 0,
	duration: 1.3,
});
gsap.from(project2, {
	scrollTrigger: {
		trigger: project2,
		start: 'center 60%',
		toggleActions: 'restart none none reverse',
	},
	x: -50,
	opacity: 0,
	duration: 1.3,
});
gsap.from(project3, {
	scrollTrigger: {
		trigger: project3,
		start: 'center 60%',
		toggleActions: 'restart none none reverse',
	},
	x: -50,
	opacity: 0,
	duration: 1.3,
});
gsap.from(project4, {
	scrollTrigger: {
		trigger: project4,
		start: 'center 60%',
		toggleActions: 'restart none none reverse',
	},
	x: -50,
	opacity: 0,
	duration: 1.3,
});
