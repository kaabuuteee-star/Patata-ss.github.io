// --- script.js ---

// 1. SOUND EFFECT
// This is a simple "Pop" sound encoded in text so you don't need to download an MP3 file.
const clickSound = new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YXcAAACAgICAgICAgICAgICAgICAf3hxeHCAgIB/fXN3dnZ5e3x5d3JycXJwcHFzd3Z2eXp6enp6eXl5eXl5eXp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6");
clickSound.volume = 0.5; // 50% Volume

function playClick() {
    clickSound.currentTime = 0;
    clickSound.play().catch(error => console.log("Audio blocked: User must interact first"));
}

// 2. PAGE TRANSITION LOGIC
document.addEventListener("DOMContentLoaded", () => {
    
    // Find all links on the page
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            
            // Only run logic for internal links (not #hashtags or external sites)
            if (this.hostname === window.location.hostname && this.getAttribute('href').indexOf('#') === -1) {
                e.preventDefault(); // Stop the browser from moving instantly
                
                playClick(); // Play sound
                
                const target = this.getAttribute('href');
                
                // Add the fade-out class to the body
                document.body.classList.add('fade-out');

                // Wait 500ms for animation to finish, then go to page
                setTimeout(() => {
                    window.location.href = target;
                }, 500);
            } else {
                // If it's a button or external link, just play sound
                playClick();
            }
        });
    });

    // Also play sound on all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', playClick);
    });
});