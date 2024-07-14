document.addEventListener('DOMContentLoaded', function() {
    const scrollContainers = document.querySelectorAll('.scroll-container');

    scrollContainers.forEach(container => {
        // Clone the images within each scroll container
        const images = container.querySelectorAll('img');
        const totalImages = images.length;
        
        // Clone the images multiple times to create a seamless loop
        for (let i = 0; i < 2; i++) {
            images.forEach(img => {
                const clone = img.cloneNode(true);
                container.appendChild(clone);
            });
        }

        // Function to reset scroll position if necessary
        function resetScrollPosition() {
            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft -= container.scrollWidth / 2;
            }
        }

        // Start the scrolling animation
        let scrollAmount = 1; // Adjust scroll speed as needed
        let intervalId = setInterval(scrollStep, 20); // Adjust the interval for scroll speed
        
        function scrollStep() {
            container.scrollLeft += scrollAmount;
            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft -= container.scrollWidth / 2;
            }
        }

        // Pause the scrolling animation on hover
        container.addEventListener('mouseenter', function() {
            clearInterval(intervalId);
        });

        // Resume the scrolling animation on mouse leave
        container.addEventListener('mouseleave', function() {
            intervalId = setInterval(scrollStep, 20);
        });

    });
});

