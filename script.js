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

	let offsetVal = undefined;

	window.addEventListener('scroll', () => {
		console.log(window.pageYOffset);
		if (window.pageYOffset > 140 && window.pageYOffset <= 190) {
			offsetVal = window.pageYOffset - 140;
			emailDiv.style = 'left: ' + offsetVal + 'px;';
		} else if (window.pageYOffset > 190 && window.pageYOffset < 400) {
			emailDiv.style = 'left: 50px;';
		} else if (window.pageYOffset >= 400 && window.pageYOffset < 450) {
			offsetVal = 450 - window.pageYOffset;
			emailDiv.style = 'left: ' + offsetVal + 'px;';
		} else if (window.pageYOffset >= 420 && window.pageYOffset < 800) {
			emailDiv.style = '';
		} else if (window.pageYOffset > 800 && window.pageYOffset <= 930) {
			offsetVal = window.pageYOffset - 800;
			emailDiv.style = 'color: pink; left: ' + offsetVal + 'px;';
		} else if (window.pageYOffset > 880 && window.pageYOffset < 1300) {
			// 
		} else if (window.pageYOffset > 1570 && window.pageYOffset < 2290) {
			// emailDiv.style = 'color: orange; left: 210px;';
			// emailDiv.style = 'color: orange; left: 210px;';
		} else {
			emailDiv.style = '';
		}
	});

}, {once: true});