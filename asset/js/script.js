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
  rollNumbers(15485, 900, "teams");
});