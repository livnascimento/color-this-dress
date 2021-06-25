$(document).ready(function(){
    $("#wall-color").on("input change", function() {
        $("body").css("background-color", $(this).val());
    })
})

$(document).ready(function(){
    $("#dress-color").on("input change", function() {
        $("#dress-overlay").css({'fill': $(this).val()});
    })
})