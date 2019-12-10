var hourArray = [{hours : 9 }, 
                {hours : 10},
                {hours : 11},
                {hours : 12}, 
                {hours : 13}, 
                {hours : 14},
                {hours : 15}, 
                {hours : 16},
                {hours : 17}];

var todoList = [{activity: ""},
                {activity: ""},
                {activity: ""},
                {activity: ""},
                {activity: ""},
                {activity: ""},
                {activity: ""},
                {activity: ""},
                {activity: ""}];

$(document).ready(function() {



//  $("#date").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));


// console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

//function for main date text
function update() {
    $("#date").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
};


//dynamically set hour divs
function showTimes() {

    for(i = 0; i < hourArray.length; i++) {
    console.log(moment(hourArray[i]).format("dddd, hA") )
    //create HTML elements for each hour
    var newDiv = $("<div>");
    newDiv.addClass("row time-container");
    var newChildDiv = $("<div>");
    newChildDiv.addClass("input-group mb-2");
    var prependDiv = $("<div>");
    prependDiv.addClass("col-2");
    var timeSpan = $("<span>");
    timeSpan.addClass("input-group-text border-white rounded-0 bg-transparent text-white timeSpan");
    timeSpan.text(moment(hourArray[i]).format("h a")) ;
    var inputText = $("<input>");
    inputText.addClass("form-control form-control-lg activity");
    inputText.attr("type", "text");
    var appendDiv = $("<div>");
    appendDiv.addClass("col-2");
    var saveSpan = $("<span>");
    saveSpan.addClass("input-group-text btn bg-transparent text-white saveSpan");
    saveSpan.attr("data-id", i);
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

//local storage functions
function getLocal(){
    var storedTodo = JSON.parse(localStorage.getItem("todoList"));

    if(storedTodo !== null){
        todoList = storedTodo
        } else {
            todoList
        };
$(".activity").each(function(thing){
    var activity = todoList[thing].activity;
    $(this).val(activity)
    console.log($(this).attr("data-id"))
    })

}

function saveLocal(){
    localStorage.setItem("todoList", JSON.stringify(todoList));
}


//run on start
setInterval(update, 1000);

showTimes();
getLocal();
console.log(JSON.parse(localStorage.getItem("todoList")));
console.log(moment().toObject());





//color conditionals
// set({"hour": 12, "minute" : 30})


    $(".activity").each(function(hour){

        if(moment().isBetween(hourArray[hour], hourArray[hour + 1]) || moment().isSame(hourArray[hour])) {
            $(this).css({"background-color": "#efbe66", "color" : "black"})
            
    } else if(moment().isBefore(hourArray[hour])) {
        $(this).css({"background-color": "#e59400", "color" : "white"})
        
    } else {
        $(this).css({"background-color": "#D2B48C", "opacity" : "0.5", "color": "black"}) 
    }
        
    


    })



//click events

$(".btn").on("click", function(){

    var btnID = $(this).attr("data-id");
    var response = $(this).parent().prev().val();
    todoList[btnID].activity = response
    console.log(todoList);

    saveLocal();
    getLocal();

    $(".save-container").fadeIn("slow").fadeOut(2000)
})



})