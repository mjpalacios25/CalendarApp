var hourArray = [{hours : 9 }, 
                {hours : 10},
                {hours : 11},
                {hours : 12}, 
                {hours : 13}, 
                {hours : 14},
                {hours : 15}, 
                {hours : 16},
                {hours : 17}];

var todoList = []

$(document).ready(function() {

    

//  $("#date").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));


// console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));


function showTimes() {

    for(i = 0; i < hourArray.length; i++) {
    console.log(moment(hourArray[i]).format("dddd, hA") )
    //create HTML elements for each hour
    var newDiv = $("<div>");
    newDiv.addClass("row time-container");
    var newChildDiv = $("<div>");
    newChildDiv.addClass("input-group mb-2");
    var prependDiv = $("<div>");
    prependDiv.addClass("input-group-prepend");
    var timeSpan = $("<span>");
    timeSpan.addClass("input-group-text bg-white border-left-0 border-danger rounded-0");
    timeSpan.text(moment(hourArray[i]).format("dddd, hA")) ;
    var inputText = $("<input>");
    inputText.addClass("form-control form-control-lg");
    inputText.attr("type", "text");
    inputText.attr("style", "background-color: lightgray");
    var appendDiv = $("<div>");
    appendDiv.addClass("input-group-append");
    var saveSpan = $("<span>");
    saveSpan.addClass("input-group-text btn");
    saveSpan.text("Save") ;

    //append each element sequentially to form an input group
    $(".container").append(newDiv);
    newDiv.append(newChildDiv);
    newChildDiv.append(prependDiv);
    prependDiv.append(timeSpan);
    newChildDiv.append(inputText);
    newChildDiv.append(appendDiv);
    appendDiv.append(saveSpan)

    }

};

function update() {
    $("#date").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
};

function saveLocal(){

}


setInterval(update, 1000);

showTimes();

console.log(moment().toObject())









})