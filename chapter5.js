// Created a current date and time

var todaysDate = $("#currentDay");
var dateTitle = moment().format("LLLL"); //"dddd MMMM Do YYYY"
todaysDate.text(dateTitle);

//Create buttons
var btn1 = $('#btn9');
var btn12 = $('#btn10');
var btn3 = $('#btn11');
var btn4 = $('#btn12');
var btn5 = $('#btn1');
var btn6 = $('#btn2');
var btn7 = $('#btn3');
var btn8 = $('#btn4');
var btn9 = $('#btn5');


$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        
        localStorage.setItem(time, text);
    })

// Past,present, future 

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockTime, timeNow);
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })




    
     


//Save and use localstorage
$("#button9 .description").val(localStorage.getItem("button9"));
$("#button10 .description").val(localStorage.getItem("button10"));
$("button11 .description").val(localStorage.getItem("button11"));
$("button12 .description").val(localStorage.getItem("button12"));
$("#button1 .description").val(localStorage.getItem("button1"));
$("#button2 .description").val(localStorage.getItem("button2"));
$("#button3 .description").val(localStorage.getItem("button3"));
$("#button4 .description").val(localStorage.getItem("button4"));
$("#button5 .description").val(localStorage.getItem("button5"));


}
