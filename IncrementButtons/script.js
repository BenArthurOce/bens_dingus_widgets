
// Plus button
$(document).ready(function() {
    $(".plus-button").click(function() {
  
        // Find the number box in the same group
        var inputField = $(this).siblings(".num-box");
      
        // Increment the value and update the input field
        var currentValue = parseInt(inputField.val());
        inputField.val(currentValue + 1);
    })
});


// Minus button
$(document).ready(function() {
    $(".minus-button").click(function() {
  
        // Find the number box in the same group
        var inputField = $(this).siblings(".num-box");
      
        // Increment the value and update the input field
        var currentValue = parseInt(inputField.val());
        inputField.val(Math.max(0, currentValue - 1)); 
    })
});
  