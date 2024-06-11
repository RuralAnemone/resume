const themeToggleButton = document.querySelector("div.theme-toggle");
themeToggleButton.addEventListener("click", toggleTheme);

if (localStorage.getItem("dark mode") === null) {
	console.debug("no theme found, setting to light")
	localStorage.setItem("dark mode", false);
}
changeTheme();

/**
 * Toggles the theme from dark to light.
 * Defaults to light mode if no value is found in local storage.
 */
function toggleTheme() {
	console.debug("click (:")
	readWriteTheme();
	changeTheme();
}

function changeTheme() {
	const darkMode = localStorage.getItem("dark mode");

	console.debug(`changing to ${darkMode ? "dark" : "light"}`);

	if (darkMode) document.body.classList.add("dark");
	else document.body.classList.remove("dark");
}

function readWriteTheme() {
	console.debug("theme is now", localStorage.getItem("dark mode"));

	if (!localStorage.getItem("dark mode")) {
		localStorage.setItem("dark mode", true);
	} else localStorage.setItem("dark mode", false); // if dark mode == true

	console.debug("theme is now", localStorage.getItem("dark mode"));
}

