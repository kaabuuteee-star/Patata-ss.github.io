// --- script.js ---

// 1. SOUND EFFECT (Base64 Pop Sound)
const clickSound = new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YXcAAACAgICAgICAgICAgICAgICAf3hxeHCAgIB/fXN3dnZ5e3x5d3JycXJwcHFzd3Z2eXp6enp6eXl5eXl5eXp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6");
clickSound.volume = 0.5;

function playClick() {
    clickSound.currentTime = 0;
    clickSound.play().catch(e => console.log("Audio waiting for interaction"));
}

// 2. PAGE TRANSITION & CLICK LISTENERS
document.addEventListener("DOMContentLoaded", () => {
    
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Internal links only
            if (this.hostname === window.location.hostname && this.getAttribute('href').indexOf('#') === -1 && this.getAttribute('target') !== "_blank") {
                e.preventDefault();
                playClick();
                const target = this.getAttribute('href');
                document.body.classList.add('fade-out');
                setTimeout(() => { window.location.href = target; }, 500);
            } else {
                playClick(); // Just play sound for other links
            }
        });
    });

    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', playClick);
    });
});