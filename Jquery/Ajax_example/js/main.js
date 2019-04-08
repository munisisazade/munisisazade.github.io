
var DATA_URL = "https://jsonplaceholder.typicode.com/posts";
var new_url = "https://jsonplaceholder.typicode.com/photos?_start=10&_limit=20"
var todo_link = "https://jsonplaceholder.typicode.com/todos?_limit=50";

function create_card(title, image_url) {
    var start_text = "<div class='col-4'><div class=\"card\" style=\"width:300px\"><div class=\"card-body\"><h4 class=\"card-title\">";
    var text = title + "</h4></div>";
    var end = `<img class="card-img-bottom" src="${image_url}" alt='' />` + "</div></div>";
    var result = start_text + text + end;
    console.log(result);
    return result;
}

function create_li (title, completed) {
    if (completed) {
        return "<li class=\"list-group-item\" style=\"background: green;\">" + title + "</li>";
    }
    else {
        return "<li class=\"list-group-item\" style=\"background: yellow;\">" + title + "</li>";
    }
}


$(document).ready(function (e) {
    $.ajax({
        url: todo_link,
        method: "GET",
        contentType: "application/json",
        success: function(data) {
            var obj = data[0];
            console.log(obj);
            for(var i = 0; i < data.length; i++) {
                $(".list-group").append(create_li(data[i].title, data[i].completed));
            }
        },
        error: function(error) {
            console.log(error);
        }
    })
});