const toggleSwitch = document.getElementById('mode-toggle');
const modeText = document.getElementById('mode-text');

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    document.body.classList.add('dark-mode');
    modeText.innerText = 'Dark Mode';
  } else {
    document.body.classList.remove('dark-mode');
    modeText.innerText = 'Light Mode';
  }
});
