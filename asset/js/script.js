$(document).ready(function(){
  // Function to generate random number between 0 and 9 for each digit
  function getRandomDigit() {
    return Math.floor(Math.random() * 10);
  }

  // Function to roll the numbers until the target number is reached
  function rollNumbers(targetNumber, duration, resultId) {
    const digits = $(`#${resultId} .digit`);
    const interval = duration / (targetNumber - 0); // Adjust duration for smoother animation

    const intervalId = setInterval(() => {
      // Generate random digits for each position
      digits.each(function(){
        $(this).text(getRandomDigit());
      });
    }, 50); // Adjust the interval for smoother animation

    // Update the final number after the specified duration
    setTimeout(() => {
      clearInterval(intervalId);
      const finalDigits = String(targetNumber).padStart(5, '0').split('');
      digits.each(function(index){
        $(this).text(finalDigits[index]);
      });
    }, duration);
  }

  // Call the function with the target numbers and durations
  rollNumbers(12520, 900, "players");
  rollNumbers(14854, 900, "academies");
  rollNumbers(14750, 900, "coaches");
  rollNumbers(11485, 900, "teams");


  const registerButton = $('#openRegester');
  const registerPopup = $('.register_popup');

  function showPopup() {
    registerPopup.css('display', 'block');
    registerPopup.addClass('slide-in');
  }

  function hidePopup() {
    registerPopup.removeClass('slide-in');
    registerPopup.addClass('slide-out');
    setTimeout(function() {
      registerPopup.css('display', 'none');
      registerPopup.removeClass('slide-out');
    }, 300);
  }

  if (registerButton.length > 0) {
    registerButton.on('click', showPopup);
  }



  registerPopup.on('click', function(e) {
    if (e.target === registerPopup[0]) {
      hidePopup();
    }
  });
});
