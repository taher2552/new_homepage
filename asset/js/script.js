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

//  register 
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

  // register 2 
  $("#openRegisterOption").click(function(event) {
    event.stopPropagation(); // Prevents the click event from propagating to the document
    $(".register_popup_new").css("display", "block");
});

// Handle document click to close the popup if clicked outside
$(document).click(function(event) {
    var $target = $(event.target);
    if (!$target.closest('.reg_box, #openRegisterOption').length) {
        $(".register_popup_new").css("display", "none");
    }
});

// Prevent closing when clicking inside the popup
$(".reg_box").click(function(event) {
    event.stopPropagation();
});

//sports

$('.sports_img:nth-child(n+19)').hide();

// Click event on the "View All Sports" button
$('.sport_text_2').on('click', function() {
    // Check the current text to decide the action
    if ($(this).text() === 'View All Sports') {
        // Show all sports icons
        $('.sports_img').show();
        // Change the button text
        $(this).text('Hide All Sports');
    } else {
        // Hide sports icons beyond the first 18
        $('.sports_img:nth-child(n+19)').hide();
        // Change the button text
        $(this).text('View All Sports');
    }
});

$('.nh_sport_input').on('keyup', function() {
  var searchValue = $(this).val().toLowerCase();

  // Show or hide the view all sports text based on the search input
  if (searchValue) {
      $('.sport_text_2').hide();  // Hide the view/hide text if search is active
      $('.sports_img').show();   // Show all to filter properly
  } else {
      $('.sport_text_2').show().text('Hide All Sports'); // Show and reset the view all sports text
                // Hide icons beyond the first 18
  }
  
  // Filter sports based on input
  $('.sports_img').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(searchValue) > -1);
  });
});

$('#sports_click').click(function() {
  $('.sports_popup').slideToggle('fast'); // Toggle visibility with sliding effect
});

// Hide popup when clicking outside of sports_box within sports_popup
$(document).on('click', function(event) {
  // Check if the clicked area is not sports_click and not a descendant of sports_box
  if (!$(event.target).closest('#sports_click, .sports_box').length) {
      // If the popup is visible, slide it up to hide
      if ($('.sports_popup').is(':visible')) {
          $('.sports_popup').slideUp('fast');
          $('.sport_text_2').show().text('Hide All Sports');
          $('.nh_sport_input').val("");
          $('.sports_img').show(); 
          $('.sports_img:nth-child(n+19)').hide();
      }
  }
});
});
