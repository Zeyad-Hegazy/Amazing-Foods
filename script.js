// set display of icons in section 1
const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;
setInterval(() => {
	i++;
	const icon = document.querySelector(".section-1-icons .display");
	icon.classList.remove("display");
	if (i > icons.length) {
		icons[0].classList.add("display");
		i = 1;
	} else {
		icon.nextElementSibling.classList.add("display");
	}
}, 1000);

// Get Daynamic Year for copyRight Footer

const copyright = document.getElementById("copyRight");
let thisYear = new Date().getFullYear().toString();
copyright.innerHTML = `Zeyad Hegazy ${thisYear} &copy;`;

// Make Anchor NavBar
const hiddenNav = document.getElementById("hidden-nav");
const anchor = document.getElementById("anchor");
anchor.addEventListener("click", function () {
	document.querySelectorAll(".target").forEach((item) => {
		item.classList.toggle("change");
	});
});
