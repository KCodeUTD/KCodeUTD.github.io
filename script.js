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

// --- PROJECT FILTER LOGIC ---

// 1. Select all filter buttons and all project cards
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// 2. Listen for clicks on each individual filter button
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        // Remove the 'active' background style from whatever button had it before
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add the 'active' highlight style to the button we just clicked
        button.classList.add('active');
        
        // Grab the category category key (e.g., "all", "software", "hardware")
        const targetFilter = button.getAttribute('data-filter');
        
        // 3. Loop through every project card on the screen
        projectCards.forEach(card => {
            // Look at the card's top span tag to see its type
            const isSoftware = card.querySelector('.project-tag').classList.contains('tag-software');
            const isHardware = card.querySelector('.project-tag').classList.contains('tag-hardware');
            
            // Map the layout rules
            if (targetFilter === 'all') {
                card.classList.remove('hide'); // Show everything
            } else if (targetFilter === 'software' && isSoftware) {
                card.classList.remove('hide'); // Show match
            } else if (targetFilter === 'hardware' && isHardware) {
                card.classList.remove('hide'); // Show match
            } else {
                card.classList.add('hide');    // Hide non-matching cards
            }
        });
    });
});