// 1. Select the button and the body elements
const themeBtn = document.getElementById('theme-btn');
const bodyElement = document.body;

// 2. CHECK MEMORY: When the page loads, see if the user chose Dark Mode before
const currentTheme = localStorage.getItem('darkThemeStatus');

// If memory says "enabled", turn on dark mode immediately
if (currentTheme === 'enabled') {
    bodyElement.classList.add('dark-theme');
    themeBtn.textContent = 'Switch to Light Mode';
}

// 3. LISTEN FOR CLICKS: What happens when they click the button
themeBtn.addEventListener('click', () => {
    // Toggle the dark theme class
    bodyElement.classList.toggle('dark-theme');
    
    // 4. SAVE TO MEMORY: Update the database based on the new state
    if (bodyElement.classList.contains('dark-theme')) {
        themeBtn.textContent = 'Switch to Light Mode';
        localStorage.setItem('darkThemeStatus', 'enabled'); // Save preference
    } else {
        themeBtn.textContent = 'Switch to Dark Mode';
        localStorage.setItem('darkThemeStatus', 'disabled'); // Save preference
    }
});