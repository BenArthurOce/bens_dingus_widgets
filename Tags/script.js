// drop down box
$(document).ready(function() {
  $("#tag-select-dropdown").change(function() {

    // Define what is in the Tag dropdown box
    let inputTagString = $(this).val()
    inputTagString = inputTagString.trim()

    // Add the tag text to the list
    if (inputTagString !== "") {
      const tagEl = $("<li></li>");   // new tag element
      tagEl.addClass("tag");
      tagEl.text(inputTagString);
      $("#tag-list-display").append(tagEl);
    }
  });
});


// Submit tag button
$(document).ready(function() {
  $("#add-tag-btn").click(function() {

    // Define what is in the Tag input box
    let inputTagString = $("#tag-input-textbox").val()
    inputTagString = inputTagString.trim()

    // Add the tag text to the list
    if (inputTagString !== "") {
      const tagEl = $("<li></li>");   // new tag element
      tagEl.addClass("tag");
      tagEl.text(inputTagString);
      $("#tag-list-display").append(tagEl);
    }

    // Clear the textbox
    $("#tag-input-textbox").val("")
  });
});


// Remove Tag
$(document).ready(function() {
  $("#tag-list-display").on("click", ".tag", function() {
    $(this).remove();
  });
});




