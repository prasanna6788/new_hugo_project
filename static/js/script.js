// Get the current page URL
const currentUrl = window.location.pathname;
console.log("----------",currentUrl);
// Get all sidebar links
const sidebarLinks = document.querySelectorAll('.aside-option a');

// Loop through links to find the matching URL
sidebarLinks.forEach(link => {
  if (link.getAttribute('href') === currentUrl) {
    // Add 'active' class to the matching link
    link.classList.add('active');
  }
});
console.log("helo");