$(document).ready(function() {


//  $("#date").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));


// console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

function update() {
    $("#date").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
}
setInterval(update, 1000);

console.log(moment().toObject())









})