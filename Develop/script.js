var list = JSON.parse(localStorage.getItem('tasks')) || [];

var time = $('#currentDay.lead').append(moment().format("dddd, MMMM Do, YYYY"));


var form = $("form").on("click", function() {
        // get current text of p element
        var text = $(this)
          .text()
          .trim();
      
        // replace p element with a new textarea
        var textInput = $("<input>").addClass("textarea");
        $(this).replaceWith(textInput);
});