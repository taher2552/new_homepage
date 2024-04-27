$(document).ready(function(){
  //search toggle
  $('.white_search').click(function() {
    $('.search_top').toggle();  // This toggles the display between block and none
});
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
      }
  }
});

$(".city_text").click(function() {
  var $cityGrid = $(".city_grid");
  var $cityText = $(this);

  $cityGrid.toggle(); // This toggles the visibility of the city grid
  if ($cityText.text() === "View All Cities") {
      $cityText.text("Hide All Cities"); // Change text to "Hide All Cities"
  } else {
      $cityText.text("View All Cities"); // Change text back to "View All Cities"
  }
});


$('#city_click').click(function() {
  $('.city_popup').slideToggle('fast'); // Toggle visibility with sliding effect
});

// Hide popup when clicking outside of sports_box within sports_popup
$(document).on('click', function(event) {
  // Check if the clicked area is not sports_click and not a descendant of sports_box
  if (!$(event.target).closest('#city_click, .city_box').length) {
      // If the popup is visible, slide it up to hide
      if ($('.city_popup').is(':visible')) {
          $('.city_popup').slideUp('fast');
          $('.city_text').show().text('View All Cities');
          $('.nh_city_input').val("");
          $('.city_grid li').each(function() { // Iterate over each list item in the city grid
                $(this).show(); 
        });
          $(".city_grid").hide();

      }
  }
});

$('#citySearchInput').keyup(function() {
  $(".city_grid").show();
  var searchValue = $(this).val().toLowerCase(); // Get the search input value and convert it to lower case

  $('.city_grid li').each(function() { // Iterate over each list item in the city grid
      var cityText = $(this).text().toLowerCase(); // Get the text of the current list item and convert to lower case
      if (cityText.includes(searchValue)) { // Check if the list item's text includes the search value
          $(this).show(); // If it does, show the list item
      } else {
          $(this).hide();
          $('.city_text').show().text('Hide All Cities');
      }
  });
});





});
