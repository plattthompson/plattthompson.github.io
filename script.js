//DOM function to prevent HTML-scanning spambots

const contact = document.getElementById("email-appear");

let nodeNumber = 1;
let num = 0;

contact.addEventListener("click", function(e) {
	e.preventDefault();
	const newDiv = document.createElement("div");
	const email = document.createTextNode("plattthompsonprogramming@gmail.com");
	newDiv.appendChild(email);

	contact.insertBefore(newDiv, contact.childNodes[nodeNumber]);

	const setDivClass = document.getElementsByTagName("div")[num].setAttribute("class", "email animated slideInRight");

	nodeNumber++;
	num++;
})