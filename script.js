// Chalah's Travels - Restaurant Search Functionality
console.log('Chalah\'s Travels JavaScript loaded successfully! 🍽️');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing app...');
  initializeApp();
});

function initializeApp() {
  // Handle search form
  const searchForm = document.querySelector('form[role="search"]');
  if (searchForm) {
    console.log('Search form found, attaching event listener');
    searchForm.addEventListener('submit', handleSearch);
  } else {
    console.log('No search form found on this page');
  }
}

async function handleSearch(event) {
  event.preventDefault();
  
  const searchInput = event.target.querySelector('input[name="q"]');
  const query = searchInput.value.trim();
  
  console.log('Search submitted with query:', query);
  
  if (!query) {
    alert('Please enter a location or zip code');
    return;
  }
  
  // Show loading state
  showLoading(true);
  
  try {
    // TODO: Replace this with your actual API endpoint
    // For now, this is a placeholder that will show the connection works
    
    console.log('Attempting API call for:', query);
    
    // Example: If you're using a serverless function
    // const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
    
    // Example: If you're using Google Places API (NOT SECURE - needs serverless function)
    // const API_KEY = 'YOUR_KEY_HERE'; // DON'T DO THIS IN PRODUCTION
    // const response = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${query}&key=${API_KEY}`);
    
    // For now, simulate a successful API call
    await simulateAPICall(query);
    
    showLoading(false);
    alert(`Search for "${query}" completed!\n\nNext step: Connect to your actual API endpoint.`);
    
  } catch (error) {
    console.error('Search error:', error);
    showLoading(false);
    alert('Search failed. Check browser console for details.');
  }
}

// Simulates an API call for testing
async function simulateAPICall(query) {
  console.log('Simulating API call...');
  
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('API call complete (simulated)');
      resolve({
        success: true,
        results: [
          { name: 'Test Restaurant 1', location: query },
          { name: 'Test Restaurant 2', location: query }
        ]
      });
    }, 1000);
  });
}

function showLoading(isLoading) {
  const button = document.querySelector('.search-button');
  if (button) {
    button.disabled = isLoading;
    button.style.opacity = isLoading ? '0.5' : '1';
    button.style.cursor = isLoading ? 'wait' : 'pointer';
  }
  
  console.log(isLoading ? 'Loading started...' : 'Loading finished');
}

// Log that the script loaded completely
console.log('All functions defined, ready for user interaction');
