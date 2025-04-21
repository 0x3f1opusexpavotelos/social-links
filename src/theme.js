export function setupThemeToggle() {
  const doc = document.documentElement
  const toggle = document.querySelector('#theme-toggle')

  const toggleDarkMode = () => {
    const newTheme = toggle.checked ? "dark" : "light"
    doc.setAttribute("data-theme", newTheme)
  }

  toggle.addEventListener('change', toggleDarkMode)

}
