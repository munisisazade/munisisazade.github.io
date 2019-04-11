

function make_li(text) {
    return `<li>${text}</li>`;
}

function update_total() {
    $(".total").text($(".result").find("li").length);
}

var selectedElement;

$(document).ready(function (e) {
    $(".add-button").click(function (e) {
        var input_text = $(".text").val();
        if (input_text !== "" && $(".result").find("li").length <= 5) {
            $(".text").val("");
            $(".result").append(make_li(input_text));
            update_total();
        }
        else {
            alert("maxsimum 5 rows");
        }
    });

    $(".delete-button").click(function (e) {
        if ($(".result").find("li").length > 1) {
            $(".result").find("li:last-child").remove();
            update_total();
        }
    });

    $(document).on("click", "li", function (e) {
        if ($(".update-button").text() === "Yadda saxla") {
            selectedElement = this;
            $(".text").val($(this).text());
        }
    });

    $(".update-button").click(function (e) {
        if ($(this).text() === "Deyish") {
            // select element
            $(this).text("Yadda saxla");

        }
        else {
            $(this).text("Deyish");
            if (!selectedElement) {
                alert("Zehmet olmasa element secin!");
            }
            else {
                var input_text = $(".text").val();
                $(".text").val("");
                if (input_text !== "") {
                    $(selectedElement).text(input_text);
                    console.log("deyishdi");
                }
            }
            // yadda saxlasin
        }
    });
});