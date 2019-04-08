// Jquery selectorlar 

// jQuery ve ya $ eger console da varsa demeli jquery qoshulub

// Selectorlar
// Elementi secmek ucun
$("span");
// Class a gore 
$(".classname");
// Id ye gore 
$("#idname");
// Attributa gore 
$("h3[data-id=2]");

$(document).ready(function (e) {

    // $("h3").click(function (event) {
    //     console.log(this);
    //     $(this).css("background", "red");

    // });
    // var element;
    // $("li").click(function (e) {
    //     $(this).css("background", "yellow");
    //     if (element) {
    //         element.css("background", "white");
    //     }
    //     element = $(this);
    // });

    // var click_button = false;
    // $(".click-me").click(function (e) {
    //     (!click_button) ? $("p").hide() : $("p").show();
    //     click_button =  (click_button) ? false : true;
    // });
    // $("h3").css("transition","2s");
    // $(".click-me").click(function (e) {
    //     if ($("h3").hasClass("bg-text")) {
    //         $("h3").removeClass("bg-text");
    //     }
    //     else {
    //         $("h3").addClass("bg-text");
    //     }
    // });
    var position = false;

    $("h3").click(function (e) {
        var text = $("h3").text();
        if (!position) {
            $("h3").html("<input type='text' class='form-control' value='" + text + "'>");
            position = true;
        }
        else {
            var input_value = $("input[type=text]").val();
            $("h3").html(input_value);
            position = false;
        }
    });

    var status = 1;

    $(".change-text").click(function (e) {
        if (status == 1) {
            $("h2").text("change");
            status = 2;
        }
        else if (status == 2) {
            $("h2").css("background", "red");
            status = 3;
        }
        else if (status == 3) {
            $("h2").css("background", "white");
            status = 4;
        }
        else {
            $("h2").text("Text ");
            status = 1;
        }
    });
    $("h1").click(function(event) {
        var text = $(this).text();
        if (!$(this).html().startsWith("<textarea")) {
            $(this).html("<textarea class='form-control' rows='90' cols='30'>" + text + "</textarea>");
        }
    })

    $(document).on("keypress", "textarea", function(e) {
        if (event.key === "Enter") {
            input_value = $(this).val();
            $(this).parent().html(input_value);
        }
    });


    // $(".click-me-back").click(function(e) {
        
    // });
});



