/* eslint-disable indent */
const navbar = document.querySelector('.navbar');
const home = document.querySelector('#home');

const tl = new TimelineMax();

tl.fromTo(home, 2, { opacity: 0 }, { opacity: 1 }).fromTo(
	navbar,
	2,
	{ y: '-50%' },
	{ y: '0%' },
	'-=2'
);
