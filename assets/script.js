$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        // get nearby values
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // save in localStorage
        localStorage.setItem(time, value);
    });
    function timeUpdater() {
        // variable to set present hour
        var presentHour = moment().hours();
        $("time-block").each(function () {
            var hourBlock = parseInt($(this).attr("id").split("-")[1]);
            if (hourBlock < presentHour) {
                $(this).addClass("past");
            }
            else if (hourBlock === presentHour) {
                $(this).removeClass("past");
                (this).addClass("present");}
                else if (hourBlock > presentHour){
                    $(this).removeClass("present");
                (this).addClass("future");
            }
        })
    }
    timeUpdater();
});








