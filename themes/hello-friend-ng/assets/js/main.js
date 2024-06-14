/**
 * Theming.
 *
 * Supports the preferred color scheme of the operation system as well as
 * the theme choice of the user.
 *
 */
const themeToggle = document.querySelector(".theme-toggle");
const chosenThemeIsLight = chosenTheme == "light";
document.documentElement.setAttribute("data-theme", "light");
localStorage.setItem("theme", "light");

