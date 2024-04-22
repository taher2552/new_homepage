// Function to animate each number from 0 to its respective target number
function animateNumber(numberElement, targetNumber) {
    let currentValue = 0;
    const increment = Math.ceil(targetNumber / 100); // Adjust for smoother animation
  
    // Update the number every 50ms
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetNumber) {
        clearInterval(interval);
        currentValue = targetNumber;
      }
      $(numberElement).text(currentValue.toString().padStart(5, '0')); // Ensure 5 digits using jQuery
    }, 50);
  }
  
  // Call the function to start the animation for each element when the page loads
  $(document).ready(function() {
    const numberElements = $('.nh_value');
  
    numberElements.each(function() {
      const targetNumber = parseInt($(this).data('target'));
      animateNumber(this, targetNumber); // Pass the DOM element instead of jQuery object
    });
  });
  