document.addEventListener('DOMContentLoaded', function() {
    alert("I live");

});

var time_spent
var time_left = 3650
var base_num

document.getElementById("time_button").onclick = function(){
    time_spent = document.getElementById("time_input").value;
    document.getElementById("time_11").textContent = time_spent;
var new_time = parseInt(document.getElementById("time_11").textContent);
document.getElementById("time_left_set").textContent = time_left - new_time;





}





