function switchImage(largeImageUrl, clickedElement) {
  // Update the large central preview image
  document.getElementById('main-view').src = largeImageUrl;
  
  // Remove the active border class from all thumbnails
  const allThumbs = document.querySelectorAll('.thumb-card');
  allThumbs.forEach(thumb => thumb.classList.remove('active'));
  
  // Apply active class to the current target
  clickedElement.classList.add('active');
}