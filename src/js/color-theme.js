const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const switchTheme = document.querySelector('.theme-switch__toggle');
const bodyColor = document.querySelector('body');

switchTheme.addEventListener('click', colorThemeAdd);

function addedClassList(added, remove) {
  bodyColor.classList.remove(remove);
  bodyColor.classList.add(added);
}
function includeDark() {
  addedClassList(Theme.DARK, Theme.LIGHT);
}
function includeLight() {
  addedClassList(Theme.LIGHT, Theme.DARK);
}
function colorThemeAdd(evt) {
  const truthInputColor = evt.target.checked;
  if (truthInputColor) {
    includeDark();
    localStorage.setItem('color', Theme.DARK);
  } else {
    includeLight();
    localStorage.setItem('color', Theme.LIGHT);
  }
}
const readColorTheme = localStorage.getItem('color');
if (readColorTheme) {
  bodyColor.classList.add(readColorTheme);
  switchTheme.checked = readColorTheme === Theme.DARK;
}
