// zoom in scroll start
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
      duration: 500,
      // once: true 
  });
});

let scrollRef = 0;

window.addEventListener('scroll', function() {
  scrollRef <= 10 ? scrollRef++ : AOS.refresh();
});
// zoom in scroll end

// carousel start
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('#image-carousel', {
    type      : 'loop',      // Carousel mode
    perPage   : 1,           // Show 1 image at a time
    autoplay  : true,        // Enable autoplay
    interval  : 3000,        // Delay between transitions (3 seconds)
    pauseOnHover: true,      // Pause autoplay on mouse hover
    arrows    : true,        // Show manual arrows for next/prev control
    pagination: true,        // Show pagination (dots for each slide)
  });

  splide.mount();
});
// carousel end

// active tab sign


function hideSidebar() {
  if ($(window).width() <= 1200) {
    $("#sidebar").removeClass("active");
    $("#menu-toggle").show();
    $("#menu-close").hide();
  }
}

$(document).ready(function () {
  function handleToggleIcons() {
    if ($(window).width() <= 1200) {
      $("#menu-toggle").show();
      $("#menu-close").hide();
    } else {
      $("#menu-toggle").hide();
      $("#menu-close").hide();
    }
  }

  handleToggleIcons();

  $(window).resize(function () {
    handleToggleIcons();
  });

  $("#menu-toggle").click(function () {
    $("#sidebar").toggleClass("active");
    $("#menu-toggle").hide();
    $("#menu-close").show();
  });

  $("#menu-close").click(function () {
    hideSidebar();
  });

  // Handle sidebar item clicks
  $("#sidebar a").click(function () {
    hideSidebar();
  });

  // active 
  // Handle sidebar item clicks
  $("#sidebar a").click(function () {
    hideSidebar();
  });

  // Display the Home content by default
  // showContent("home");
});

// popup start

// popup end


// dark mode start
const toggleDarkModeButton = document.getElementById('toggleDarkMode');
const body = document.body;

toggleDarkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('dark-mode', isDarkMode);
  updateIcon(isDarkMode);
});

// Check if dark mode preference is stored in local storage
const savedDarkMode = localStorage.getItem('dark-mode');

if (savedDarkMode) {
  body.classList.toggle('dark-mode', savedDarkMode === 'true');
  updateIcon(savedDarkMode === 'true');
}

function updateIcon(isDarkMode) {
  const icon = toggleDarkModeButton.querySelector('i');
  icon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
}
// Function to check OS dark mode preference
// function checkOSDarkModePreference() {
//   const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

//   function handleDarkModeChange(e) {
//     const isDarkModePreferred = e.matches;
//     body.classList.toggle('dark-mode', isDarkModePreferred);
//     updateIcon(isDarkModePreferred);
//   }

//   darkModeMediaQuery.addListener(handleDarkModeChange);
//   handleDarkModeChange(darkModeMediaQuery);
// }

// // Check and apply OS dark mode preference
// checkOSDarkModePreference();

// Function to check OS dark mode preference end
// dark mode end

// clipboard copy text start
function copyToClipboard(text) {
  // Create a temporary textarea element
  var textarea = document.createElement('textarea');

  // Set the text content to the provided text
  textarea.value = text;

  // Append the textarea to the body
  document.body.appendChild(textarea);

  // Select the text in the textarea
  textarea.select();
  textarea.setSelectionRange(0, 99999); /* For mobile devices */

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(textarea);
  // Show notification
  showNotification('Text copied to clipboard');

  // Remove notification after 2 seconds
  setTimeout(function () {
    removeNotification();
  }, 1000);
}

function showNotification(message) {
  // Create a notification element
  var notification = document.createElement('div');
  notification.innerHTML = message;
  notification.className = 'notification'; // Set the class name
  notification.style.position = 'fixed';
  notification.style.top = '10px';
  notification.style.left = '50%';
  notification.style.transform = 'translateX(-50%)';
  notification.style.padding = '10px';
  notification.style.background = '#4CAF50';
  notification.style.color = 'white';
  notification.style.borderRadius = '5px';
  notification.style.zIndex = '1000';

  // Append the notification to the body
  document.body.appendChild(notification);
}

function removeNotification() {
  // Remove the notification element
  var notification = document.querySelector('.notification');
  if (notification) {
    document.body.removeChild(notification);
  }
}
// clipboard copy text stop

// hasing start
// document.addEventListener("DOMContentLoaded", function () {
//   // Get the hash value from the URL
//   console.log("inside");
//   var hash = window.location.hash.substring(1);
//   console.log(hash);

//   // If the hash is not empty, scroll to the corresponding section
//   if (hash) {
//     var targetSection = document.getElementById(hash);
//     console.log(targetSection);
//     if (targetSection) {
//       targetSection.scrollIntoView();
//     }
//   }
// });
// hashing end

