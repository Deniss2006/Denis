document.addEventListener('DOMContentLoaded', function() {
    const trigger = document.getElementById('dblclick-trigger');
    const container = document.getElementById('slideshow-container');
    const images = document.querySelectorAll('.slide-img');
    
    const delay = 3000;
    let currentImageIndex = 0;
    let slideshowInterval = null;

    function nextSlide() {
        if (images.length === 0) return;

        images[currentImageIndex].classList.remove('active-slide');

        currentImageIndex = (currentImageIndex + 1) % images.length;

        images[currentImageIndex].classList.add('active-slide');
    }

    function startSlideshow() {
        if (slideshowInterval) return;

        container.style.display = 'block';

        images.forEach((img, index) => {
            img.classList.remove('active-slide');
        });
        currentImageIndex = 0;
        if (images.length > 0) {
            images[currentImageIndex].classList.add('active-slide');
        }

        slideshowInterval = setInterval(nextSlide, delay);
        
        
        trigger.style.pointerEvents = 'none';
        trigger.style.color = '#333';
        trigger.style.textDecoration = 'none';
    }
    
    if (trigger) {
        trigger.addEventListener('dblclick', startSlideshow);
    }
});