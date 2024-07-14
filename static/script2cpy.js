function scrollToRandomImageAll() {
    // Get all scroll containers
    const scrollContainers = document.querySelectorAll('.image-scrollbar');
    
    // Loop through each scroll container
    scrollContainers.forEach(container => {
        const images = container.querySelectorAll('img');
        const totalImages = images.length;
        
        // Ensure there are images in the container
        if (totalImages > 0) {
            // Generate random index
            const randomIndex = Math.floor(Math.random() * totalImages);
            
            // Calculate scroll amount
            const image = images[0]; // Get the first image to determine its dimensions
            const imageStyle = window.getComputedStyle(image);
            const imageWidth = image.clientWidth;
            const marginLeft = parseInt(imageStyle.marginLeft);
            const marginRight = parseInt(imageStyle.marginRight);
            const scrollAmount = randomIndex * (imageWidth + marginLeft + marginRight);
            
            // Smoothly scroll to the random image
            container.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    });
}