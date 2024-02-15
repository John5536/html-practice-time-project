document.addEventListener('DOMContentLoaded', function() {
 

});

var time_spent
var time_left = 152
var base_num
var day_spent = 152


document.getElementById("time_button").onclick = function(){
    time_spent = document.getElementById("time_input").value;
    document.getElementById("time_11").textContent = time_spent;

//var new_time = parseInt(document.getElementById("time_11").textContent);
//document.getElementById("time_left_set").textContent = time_left - new_time;


}

document.getElementById("Days_button").onclick = function(){
    day_spent = document.getElementById("Day_input").value;
    var time_subtracted = parseInt(document.getElementById("time_left_set").textContent);
    document.getElementById("time_left_set").textContent = time_subtracted - day_spent;

    




}



