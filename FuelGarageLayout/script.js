"use strict"

let btn = document.getElementById("theme-btn");
let link = document.getElementById("theme-link");

btn.addEventListener("click", function () {
	ChangeTheme();
});

function ChangeTheme() {
	let lightTheme = "css/light-theme.css";
	let darkTheme = "css/dark-theme.css";

	var currTheme = link.getAttribute("href");
	var theme = "";

	if (currTheme == lightTheme) {
		currTheme = darkTheme;
		theme = "dark";
	} else {
		currTheme = lightTheme;
		theme = "light";
	}

	link.setAttribute("href", currTheme);

	function Save(theme) {
		var Request = new XMLHttpRequest();
		Request.open("GET", "themes.php?theme=" + theme, true); //У вас путь может отличаться
		Request.send();
	}

	Save(theme);
}

