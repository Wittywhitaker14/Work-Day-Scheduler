var list = JSON.parse(localStorage.getItem('tasks')) || [];

var time = $('#currentDay.lead').append(moment().format("dddd, MMMM Do, YYYY"));


var form = $("form").on("click", function() {
        var text = $(this)
          .text()
          .trim();
      
        var textInput = $("<input>").addClass("textarea");
        $(this).replaceWith(textInput);
});