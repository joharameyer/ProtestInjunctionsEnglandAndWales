window.addEventListener('load', function() {
    var style = document.createElement('style');
    style.innerHTML = `
    .leaflet-popup-content {
        font-size: 18px !important;
        line-height: 1.4 !important;
    }
    .leaflet-popup-content-wrapper {
        max-width: 90vw !important;
    }`;
    document.head.appendChild(style);
});
