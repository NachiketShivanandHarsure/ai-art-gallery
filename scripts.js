document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('gallery');

    // Placeholder URLs for AI-generated art
    const artUrls = [
        'https://placekitten.com/300/300', // Replace with AI-generated art URL
        'https://placekitten.com/301/301', // Replace with AI-generated art URL
        'https://placekitten.com/302/302', // Replace with AI-generated art URL
        // Add more URLs as needed
    ];

    // Function to create and append artwork elements to the gallery
    function createArtworkElement(url) {
        const artwork = document.createElement('img');
        artwork.src = url;
        artwork.alt = 'AI-generated artwork';
        artwork.classList.add('artwork');
        galleryContainer.appendChild(artwork);
    }

    // Add AI-generated art to the gallery
    artUrls.forEach(url => createArtworkElement(url));
});