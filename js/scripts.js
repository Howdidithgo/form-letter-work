$(document).ready(function() {
  $("#form-letter").submit(function(event) {
    event.preventDefault();
    var nameInput;
    nameInput = $("#form-name").val();
    $("h3").text(nameInput);
    $(".letter").show();
    $("h3").show();
  });
});
