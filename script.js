document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.parallax-image');
    const contentDisplay = document.querySelectorAll('.content-display p');

    let current = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
            current = section.getAttribute('data-content');
        }
    });

    // Ensure at least one content is shown
    if (!current) {
        current = 'content1'; // Default to the first content
    }

    contentDisplay.forEach((content) => {
        content.classList.add('hidden');
        if (content.id === current) {
            content.classList.remove('hidden');
        }
    });
    const audio = document.getElementById('backgroundMusic');
    audio.play().catch(error => {
        console.log('Error playing audio:', error);
    });
});

// Initial load - Show the first content
window.addEventListener('load', () => {
    // window.scrollTo(0, 0); 
    document.getElementById('audioButton').addEventListener('click', function () {
        const audio = document.getElementById('backgroundMusic');
        audio.play().then(() => {
            console.log("Audio started playing.");
        }).catch((error) => {
            console.error("Error playing audio:", error);
        });
    });
    // document.getElementById('backgroundMusic').play();
    const arrowIcon = document.getElementById('arrowSymbol');
    document.querySelector('.content-display p').classList.remove('hidden');

    const sunny = document.getElementById("sunny");
    const sun = document.getElementById("sun");


    const clouds = document.getElementById("clouds");

    for (var i = 0; i < 6; i++) {
        const cloud = document.createElement("div");
        cloud.classList.add("cloud");
        cloud.style.top = `${Math.floor(Math.random() * (20 - 10) + 10)}vh`;
        cloud.style.opacity = `${Math.random() * (0.8 - 0.4) + 0.4}`;
        cloud.style.transform = `scale(${Math.random() * (1 - 0.4) + 0.4})`;
        cloud.style.animationDelay = `${Math.floor(Math.random() * 25)}s`;
        cloud.style.animationDuration = `${Math.random() * (25 - 19) + 19}s`;
        clouds.appendChild(cloud);
    }
    const sections = document.querySelectorAll('.parallax-image, .content-display');
    let currentSectionIndex = 0;

    document.getElementById('scrollButton').addEventListener('click', () => {
        currentSectionIndex = (currentSectionIndex + 1) % sections.length; // Loop through sections
        sections[currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        updateArrowIcon();
    });

    function updateArrowIcon() {

        if (currentSectionIndex === sections.length - 1) {
            arrowIcon.classList.add('flipped'); // Add a class to flip the arrow
        } else if (currentSectionIndex === 0) {
            arrowIcon.classList.remove('flipped'); // Reset when back to top
        }
    }
});





