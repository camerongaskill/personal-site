/* eslint-disable indent */
// eslint-disable-next-line no-undef
gsap.registerPlugin(ScrollTrigger);

const project1 = document.querySelector('#project-1');
const project2 = document.querySelector('#project-2');
const project3 = document.querySelector('#project-3');
const project4 = document.querySelector('#project-4');

gsap.from(project1, {
	scrollTrigger: {
		trigger: project1,
		start: 'top 60%',
		toggleActions: 'restart none none reverse',
	},
	x: -300,
	opacity: 0,
	duration: 1.3,
});
gsap.from(project2, {
	scrollTrigger: {
		trigger: project2,
		start: 'top 60%',
		toggleActions: 'restart none none reverse',
	},
	x: -300,
	opacity: 0,
	duration: 1.3,
});
gsap.from(project3, {
	scrollTrigger: {
		trigger: project3,
		start: 'top 60%',
		toggleActions: 'restart none none reverse',
	},
	x: -300,
	opacity: 0,
	duration: 1.3,
});
gsap.from(project4, {
	scrollTrigger: {
		trigger: project4,
		start: 'top 60%',
		toggleActions: 'restart none none reverse',
	},
	x: -300,
	opacity: 0,
	duration: 1.3,
});
