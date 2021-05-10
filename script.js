//DOM function to prevent HTML-crawling spambots

const contact = document.querySelector('#email-appear');

contact.addEventListener('click', (e) => {
	// e.preventDefault();
	const emailDiv = document.createElement('div');
	const emailAddress = document.createTextNode('platt@platt.codes');
	emailDiv.appendChild(emailAddress);
	
	emailDiv.className = 'email animated fadeInRight';
	contact.insertBefore(emailDiv, contact.childNodes[2]);

	// const setDivClass = document.getElementsByTagName("div")[0].setAttribute("class", "email animated fadeInRight");
	// const setDivClass = document.querySelectorAll("div")[0].setAttribute("class", "email animated fadeInRight");
	// const setDivClass = document.querySelectorAll("div")[0].setAttribute("class", "email animated fadeInRight");

	// emailDiv.addEventListener('scroll', (e) => {
	// 	console.log(e);
	// });

	// 20-278
	// 616-1022
	// 1310-2015

	// 115-450
	// 860-1400
	// 1690-2390

	// let offsetVal = undefined;

	// window.addEventListener('scroll', () => {

	// 	if (window.pageYOffset > 140 && window.pageYOffset <= 190) {
	// 		offsetVal = window.pageYOffset - 140;
	// 		emailDiv.style = 'left: ' + (offsetVal / 16) + 'rem;';
	// 	} else if (window.pageYOffset > 190 && window.pageYOffset < 400) {
	// 		emailDiv.style = 'left: 3.125rem;';
	// 	} else if (window.pageYOffset >= 400 && window.pageYOffset < 450) {
	// 		offsetVal = 450 - window.pageYOffset;
	// 		emailDiv.style = 'left: ' + (offsetVal / 16) + 'rem;';
	// 	// Intro end
	// 	} else if (window.pageYOffset >= 420 && window.pageYOffset < 820) {
	// 		emailDiv.style = '';
	// 	// Bio start
	// 	} else if (window.pageYOffset > 820 && window.pageYOffset <= 900) {
	// 		offsetVal = (window.pageYOffset - 820) + (window.pageYOffset - 820);
	// 		emailDiv.style = 'left: ' + (offsetVal / 16) + 'rem;';
	// 	} else if (window.pageYOffset > 900 && window.pageYOffset < 1280) {
	// 		emailDiv.style = 'left: 10rem;';
	// 	} else if (window.pageYOffset >= 1280 && window.pageYOffset < 1360) {
	// 		offsetVal = (1440 - window.pageYOffset) - (window.pageYOffset - 1280);
	// 		emailDiv.style = 'left: ' + (offsetVal / 16) + 'rem;';
	// 	// Bio end
	// 	} else if (window.pageYOffset >= 1360 && window.pageYOffset <= 1530) {
	// 		emailDiv.style = '';
	// 	// Tech start
	// 	} else if (window.pageYOffset > 1530 && window.pageYOffset <= 1635) {
	// 		offsetVal = (window.pageYOffset - 1530) + (window.pageYOffset - 1530);
	// 		emailDiv.style = 'left: ' + (offsetVal / 16) + 'rem;';
	// 	} else if (window.pageYOffset > 1635 && window.pageYOffset < 2140) {
	// 		emailDiv.style = 'left: 13.125rem;';
	// 	} else if (window.pageYOffset >= 2140 && window.pageYOffset < 2245) {
	// 		offsetVal = (2350 - window.pageYOffset) - (window.pageYOffset - 2140);
	// 		emailDiv.style = 'left: ' + (offsetVal / 16) + 'rem;';
	// 	} else {
	// 		emailDiv.style = '';
	// 	}
	// });

}, {once: true});