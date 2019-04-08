
console.log("js work");
var element;
$(document).ready(function (e) {
    // hide text
    
    $(".collapse-text").hide();
    $(".list-group-item").click(function (e) {
        console.log(this);
        if (element && element != this) {
            console.log("Element var ve ozune beraber deyil");
            if ($(element).hasClass("open")) {
                $(element).find(".icon").text("+");
                $(element).find(".collapse-text").fadeOut();
                $(element).removeClass("open");
            }
            element = this;
        }
        else if (element) {
            console.log("Sadece element var");
            element = this;
        }
        else {
            console.log("Element yoxdu ");
            element = this;
        }

        if ($(this).hasClass("open")) {
            $(this).find(".icon").text("+");
            $(this).find(".collapse-text").fadeOut();
            $(this).removeClass("open");
        }
        else {
            $(this).find(".icon").text("-");
            $(this).find(".collapse-text").fadeIn();
            $(this).addClass("open");
        }
    });
});