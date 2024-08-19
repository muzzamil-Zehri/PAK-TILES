  // JavaScript to handle search bar visibility
  const searchIcon = document.getElementById('searchIcon');
  const searchBar = document.getElementById('searchBar');
  const closeSearch = document.getElementById('closeSearch');

  // Toggle search bar visibility when clicking on Search icon
  searchIcon.addEventListener('click', () => {
      searchBar.style.display = 'flex';
  });

  // Close search bar when clicking on Close button
  closeSearch.addEventListener('click', () => {
      searchBar.style.display = 'none';
  });