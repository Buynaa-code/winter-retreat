document.addEventListener('DOMContentLoaded', () => {
    const loveButton = document.getElementById('love-button');
    const reasonsList = document.getElementById('reasons-list');
    const floatingHeartsContainer = document.getElementById('floating-hearts');
    
    // Button click animation
    loveButton.addEventListener('mouseenter', () => {
        loveButton.classList.add('animate__animated', 'animate__pulse');
    });
    
    loveButton.addEventListener('mouseleave', () => {
        loveButton.classList.remove('animate__animated', 'animate__pulse');
    });
    
    // Show reasons list with animation
    loveButton.addEventListener('click', () => {
        reasonsList.classList.remove('hidden');
        setTimeout(() => {
            reasonsList.classList.add('show');
        }, 50);
        createFloatingHearts();
        playLoveSound();
    });
    
    // Create floating hearts
    function createFloatingHearts() {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.innerHTML = '❤️';
                heart.style.left = Math.random() * 100 + '%';
                floatingHeartsContainer.appendChild(heart);
                
                // Remove heart after animation
                heart.addEventListener('animationend', () => {
                    heart.remove();
                });
            }, i * 300);
        }
    }
    
    // Play a sweet sound
    function playLoveSound() {
        const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-sweet-notification-alert-937.mp3');
        audio.volume = 0.5;
        audio.play().catch(error => console.log('Audio autoplay prevented'));
    }
    
    // Add photo upload functionality
    const photoPlaceholders = document.querySelectorAll('.photo-placeholder');
    photoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        placeholder.style.backgroundImage = `url(${event.target.result})`;
                        placeholder.style.backgroundSize = 'cover';
                        placeholder.style.backgroundPosition = 'center';
                        placeholder.textContent = '';
                    };
                    reader.readAsDataURL(file);
                }
            };
            
            input.click();
        });
    });
    
    // Add some sparkle to the title
    const title = document.querySelector('.title');
    title.addEventListener('mouseover', () => {
        title.style.transform = 'scale(1.1)';
        setTimeout(() => {
            title.style.transform = 'scale(1)';
        }, 200);
    });
});
