const sideNavLinks = document.querySelectorAll(".side-nav ul li a");
const navList = document.querySelectorAll(".side-nav ul");

sideNavLinks.forEach((link) => {
	link.addEventListener("click", function () {
		sideNavLinks.forEach((li) => li.classList.remove("active"));
		this.classList.add("active");
	});
});

// const texts = document.querySelectorAll(".project-card .text");
// const projects = document.querySelectorAll(".project-card");

// projects.forEach((project) => {
// 	project.addEventListener("mouseover", function () {
// 		texts.forEach((txt) => (txt.style.display = "none"));
// 		this.style.display = "block";
// 	});
// });
