const sideNavLinks = document.querySelectorAll(".side-nav ul li a");
const navList = document.querySelectorAll(".side-nav ul");

sideNavLinks.forEach((link) => {
	link.addEventListener("click", function () {
		sideNavLinks.forEach((li) => li.classList.remove("active"));
		this.classList.add("active");
	});
});
