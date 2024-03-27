window.onload = function () {
	const BtnFirst = document.querySelector(".btnMenuOne");
	const BtnSecond = document.querySelector(".btnMenuTwo");
	const menuListFirst = document.querySelector(".menu-items-left");
	const menuListSecond = document.querySelector(".menu-items-right");
	BtnFirst.addEventListener("click", function () {
		BtnFirst.classList.add("active");
		menuListFirst.classList.add("active");
		if (menuListSecond.classList.contains("active")) {
			menuListSecond.classList.remove("active");
		}
		if (BtnSecond.classList.contains("active")) {
			BtnSecond.classList.remove("active");
		}
	});
	BtnSecond.addEventListener("click", function () {
		BtnSecond.classList.add("active");
		menuListSecond.classList.add("active");
		if (menuListFirst.classList.contains("active")) {
			menuListFirst.classList.remove("active");
		}
		if (BtnFirst.classList.contains("active")) {
			BtnFirst.classList.remove("active");
		}
	});
};

document.addEventListener("scroll", function () {
	const nav = document.querySelector(".nav-bar");
	if (window.scrollY > 0) {
		nav.classList.add("scrolled");
	} else {
		nav.classList.remove("scrolled");
	}
});
