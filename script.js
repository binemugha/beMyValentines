// Create floating hearts background
function createFloatingHearts() {
    const container = document.getElementById('heartsBackground');
    const hearts = ['❤️', '💕', '💖', '💗', '💓'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
        heart.style.animationDelay = (Math.random() * 5) + 's';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(heart);
    }
}

// Initialize
createFloatingHearts();

// Get elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const buttonsContainer = document.getElementById('buttonsContainer');
const questionScreen = document.getElementById('questionScreen');
const successScreen = document.getElementById('successScreen');

// Move the No button away from cursor
function moveNoButton() {
    const containerRect = buttonsContainer.getBoundingClientRect();
    const buttonRect = noBtn.getBoundingClientRect();
    
    // Calculate available space
    const maxX = (containerRect.width - buttonRect.width) / 2;
    const maxY = 100; // Limit vertical movement
    
    // Generate random position
    let newX = (Math.random() - 0.5) * maxX * 2;
    let newY = (Math.random() - 0.5) * maxY * 2;
    
    // Make sure it moves significantly
    if (Math.abs(newX) < 50) newX = newX > 0 ? 100 : -100;
    if (Math.abs(newY) < 30) newY = newY > 0 ? 60 : -60;
    
    noBtn.style.transform = `translate(${newX}px, ${newY}px)`;
}

// Event listeners for No button
noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    moveNoButton();
});
noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    moveNoButton();
});

// Yes button click - show success screen
yesBtn.addEventListener('click', function() {
    document.body.classList.add('success-mode');
    questionScreen.classList.add('hide');
    successScreen.classList.add('show');
});
