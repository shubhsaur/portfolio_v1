const sideNavLinks = document.querySelectorAll(".side-nav ul li a");
const navList = document.querySelectorAll(".side-nav ul");

sideNavLinks.forEach((link) => {
	link.addEventListener("click", function () {
		sideNavLinks.forEach((li) => li.classList.remove("active"));
		this.classList.add("active");
	});
});

//hamburger menu

const nav = document.querySelector("header nav");
const menu = document.querySelector("header svg.menu");
const close = document.querySelector("header svg.close");
const navLinks = document.querySelectorAll("header nav .nav-item .nav-link");

menu.addEventListener("click", () => {
	nav.classList.add("open-nav");
});

close.addEventListener("click", () => {
	nav.classList.remove("open-nav");
});

navLinks.forEach((navLink) => {
	navLink.addEventListener("click", () => {
		nav.classList.remove("open-nav");
	});
});
