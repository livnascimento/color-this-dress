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

var generator = function() {
    newBg = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
    if (newBg.length < 7) generator();

    newDressColor = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
    if (newDressColor.length < 7) generator();
};

$(document).ready(function() {
    $('#gnr-random').click(function () {
        
        generator();

        $('body').css("background-color", newBg);
        $("#dress-overlay").css({'fill': newDressColor});
        $("#wall-color").val(newBg);
        $("#dress-color").val(newDressColor);
    
    })
})
