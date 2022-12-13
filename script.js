const cssDisplay = document.querySelector("h3");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const body = document.querySelector("#gradient");
const gradientDirection = document.querySelector("#gradientdirection");
const randomize = document.querySelector("#randomize");

function setGradient() {
	if (gradientdirection.value == 'radial') {
		body.style.background = `radial-gradient(${color1.value} , ${color2.value})`;
		cssDisplay.textContent = `${body.style.background};`;
	} else {
		body.style.background = `linear-gradient(${gradientdirection.value}, 
		${color1.value} , ${color2.value})`;
		cssDisplay.textContent = `${body.style.background};`;
	}
}

function randomGradient() {
	color1.value = `#${(Math.floor(Math.random()*16777215).toString(16))}`;
	color2.value = `#${(Math.floor(Math.random()*16777215).toString(16))}`;
	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
gradientDirection.addEventListener("input", setGradient);
randomize.addEventListener("click", randomGradient);
setGradient();