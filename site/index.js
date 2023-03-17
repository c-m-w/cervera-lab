/// index.js

logo = document.getElementById("nav-logo");

window.addEventListener("scroll", (event) => {
	
	if (window.scrollY > 300) {
		
		logo.style.opacity = 1;
	} else {
		
		logo.style.opacity = 0;
	}
});
