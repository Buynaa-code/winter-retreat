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

    // Destination Carousel Functionality
    const carousel = document.querySelector('.destination-carousel');
    const cards = document.querySelectorAll('.destination-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 32; // Width + gap
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Weather Information
    async function getWeather(city) {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`
            );
            const data = await response.json();
            return `${Math.round(data.main.temp)}°C - ${data.weather[0].main}`;
        } catch (error) {
            return 'Weather data unavailable';
        }
    }

    // Update weather for each destination
    async function updateWeather() {
        const weatherElements = document.querySelectorAll('.weather-info');
        const cities = ['Paris', 'Santorini', 'Venice'];
        
        for (let i = 0; i < cities.length; i++) {
            const weather = await getWeather(cities[i]);
            weatherElements[i].textContent = `Current Weather: ${weather}`;
        }
    }

    // Plan Trip Button
    const planTripBtn = document.getElementById('plan-trip-btn');
    planTripBtn.addEventListener('click', () => {
        planTripBtn.classList.add('animate__animated', 'animate__rubberBand');
        
        // Create trip planning modal
        const modal = document.createElement('div');
        modal.className = 'trip-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h3>Let's Plan Our Dream Trip! 🌟</h3>
                <p>Choose your preferred destination and I'll help arrange everything!</p>
                <div class="destination-options">
                    ${Array.from(cards).map(card => `
                        <button class="destination-option">
                            ${card.querySelector('h3').textContent}
                        </button>
                    `).join('')}
                </div>
                <button class="close-modal">Close</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add modal styles dynamically
        const style = document.createElement('style');
        style.textContent = `
            .trip-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            }
            .modal-content {
                background: white;
                padding: 2rem;
                border-radius: 15px;
                max-width: 500px;
                text-align: center;
            }
            .destination-options {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                margin: 1.5rem 0;
            }
            .destination-option {
                padding: 1rem;
                border: 2px solid var(--primary-color);
                border-radius: 10px;
                background: none;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            .destination-option:hover {
                background: var(--primary-color);
                color: white;
            }
            .close-modal {
                background: var(--secondary-color);
                color: white;
                border: none;
                padding: 0.5rem 1rem;
                border-radius: 5px;
                cursor: pointer;
            }
        `;
        document.head.appendChild(style);
        
        // Handle modal close
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
            planTripBtn.classList.remove('animate__animated', 'animate__rubberBand');
        });
        
        // Handle destination selection
        modal.querySelectorAll('.destination-option').forEach(button => {
            button.addEventListener('click', () => {
                alert(`Great choice! I'll start planning our romantic trip to ${button.textContent.trim()} 💑`);
                modal.remove();
                planTripBtn.classList.remove('animate__animated', 'animate__rubberBand');
            });
        });
    });

    // Initialize weather information
    updateWeather();
    
    // Update weather every 30 minutes
    setInterval(updateWeather, 30 * 60 * 1000);
});
