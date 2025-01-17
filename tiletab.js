document.querySelectorAll('.product-tile').forEach(tile => {
    tile.addEventListener('keydown', (event) => {
      // Only activate if the user presses Enter or Space
      if (event.key === 'Enter' || event.key === ' ') {

        event.preventDefault(); // Prevent the default behavior (e.g., space scrolling)
        
        // Enable tabbing to inner elements by changing tabindex
        const details = tile.querySelectorAll('.product-info [tabindex="-1"]:not(h3)');
        details.forEach(element => {
          element.setAttribute('tabindex', '0'); // Make inner elements tabbable
        });
  
        // Optionally, focus the first element inside the tile (e.g., product title)
        const firstFocusable = tile.querySelector('[tabindex="0"]');
        if (firstFocusable) {
          firstFocusable.focus();
        }
      }
    });
  });

