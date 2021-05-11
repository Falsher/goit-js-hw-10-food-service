const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const switchTheme = document.querySelector('.theme-switch__toggle');
const bodyColor = document.querySelector('body');

switchTheme.addEventListener('click', colorThemeAdd);
function colorThemeAdd(evt) {
  const truthInputColor = evt.target.checked;
  if (truthInputColor) {
    bodyColor.classList.remove(Theme.LIGHT);
    bodyColor.classList.add(Theme.DARK);
    localStorage.setItem('color', Theme.DARK);
  } else {
    bodyColor.classList.remove(Theme.DARK);
    bodyColor.classList.add(Theme.LIGHT);
    localStorage.setItem('color', Theme.LIGHT);
  }
}
const readColorTheme = localStorage.getItem('color');
if (readColorTheme) {
  bodyColor.classList.add(readColorTheme);
  switchTheme.checked = readColorTheme === Theme.DARK;
}
