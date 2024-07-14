function scrollToRandomImageAll() {
    // Get all scroll containers
    const scrollContainers = document.querySelectorAll('.image-scrollbar');
    
    // Loop through each scroll container
    scrollContainers.forEach(container => {
        const images = container.querySelectorAll('img');
        const totalImages = images.length;
        
        // Generate random index
        const randomIndex = Math.floor(Math.random() * totalImages);
        
        // Calculate scroll amount
        const imageWidth = images[0].clientWidth; // Assuming all images have the same width
        const scrollAmount = randomIndex * imageWidth;
        
        // Smoothly scroll to the random image
        container.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
}
