//DOM function to prevent HTML-scanning spambots

const contact = document.querySelector("#email-appear");

contact.addEventListener("click", function(e) {
	e.preventDefault();
	const newDiv = document.createElement("div");
	const email = document.createTextNode("plattthompsonprogramming@gmail.com");
	newDiv.appendChild(email);

	contact.insertBefore(newDiv, contact.childNodes[2]);

	const setDivClass = document.getElementsByTagName("div")[0].setAttribute("class", "email animated slideInRight");
}, {once: true});