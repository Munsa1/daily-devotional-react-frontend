// This is code for the mobile menu pop up


const menuBars = document.querySelector('.fa-bars');
const overlay = document.querySelector('.overlay');
const myLinks = document.querySelector('.my-links');
const closeBar = document.querySelector('.fa-xmark');
const menuLinks = document.querySelectorAll('.link');

menuBars.addEventListener('click', () => {
  overlay.classList.remove('hidden');
  myLinks.classList.remove('hidden');
});

closeBar.addEventListener('click', () => {
  overlay.classList.add('hidden');
  myLinks.classList.add('hidden');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    myLinks.classList.add('hidden');
    overlay.classList.add('hidden');
    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});



// This is code for search icon

// Select the search container and toggle buttons
const searchContainer = document.getElementById('searchContainer');
const closeSearch = document.getElementById('closeSearch');
const openSearch = document.getElementById('openSearch');
const openSearch2 = document.getElementById('openSearch2');

// Function to toggle the search bar visibility
function toggleSearch() {
    searchContainer.classList.toggle('hidden');
}

// Event listener for the close icon
closeSearch.addEventListener('click', toggleSearch);

// Event listener for the open button (optional)
openSearch.addEventListener('click', toggleSearch);

openSearch2.addEventListener('click', toggleSearch);