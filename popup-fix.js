// Wait until the page and Leaflet map are fully loaded
window.addEventListener('load', function() {
    // Create a <style> element
    var style = document.createElement('style');

    // CSS rules for Leaflet popups
    style.innerHTML = `
    /* Base popup styling */
    .leaflet-popup-content {
        font-size: 16px !important;
        line-height: 1.4 !important;
    }
    .leaflet-popup-content-wrapper {
        max-width: 250px !important;
        padding: 10px !important;
    }

    /* Mobile adjustments */
    @media (max-width: 600px) {
        .leaflet-popup-content {
            font-size: 18px !important;
        }
        .leaflet-popup-content-wrapper {
            max-width: 90vw !important;
            padding: 15px !important;
        }
    }
    `;

    // Append the style to the <head>
    document.head.appendChild(style);

    console.log("Leaflet popup styles injected successfully!");
});
