

$(document).ready(function () {
    //listening for save buttons
    $(".saveBtn").on("click", function () {
        //getting from input elements
        var text = $(this).siblings(".description").val
        var time = $(this).parent().attr("id");
        //saves in local storage
        localStorage.setItem(time, text);
 });








 
})