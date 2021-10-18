var tasks = []
var time = $('#currentDay.lead').append(moment().format("dddd, MMMM Do, YYYY"));
var currentHour = moment().hour()
var timeblocksContainer = $('#container')
var hours = [9,10,11,12,13,14,15,16,17];

function hourEl(){
  for (let index = 0; index < hours.length; index++) {
        
    var row = $('<div class="row">');
    var col = $('<div class="col-md-1 hour">');
    var hoursLabel = hours[index] + "AM";
    var taskArea = $("<textarea class='col-md-10 textarea input card description' placeholder='Add Event Here' ></textarea>")
    var saveBtn = $("<button class='col-md-1 saveBtn' type='button' id='save-i+9'><i class='oi oi-file'></i></button>")

    if(hours[index]>= 12){
      hoursLabel = hours[index] + "PM";
    }if(hours[index]>= 13){
      hoursLabel= (hours[index] - 12) + "PM";
    };
    row.append(col);
    col.append(hoursLabel);
    row.append(taskArea);
    row.append(saveBtn);
    $("#container").append(row);
  }
};

hourEl();