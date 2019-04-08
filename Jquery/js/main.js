
var button = document.getElementById("openModal");
var modal = document.getElementById("exampleModal");

button.onclick = function(event) {
    document.body.classList.add("modal-open");
    modal.classList.add("show");
    modal.style.display = "block";
    modal.style.background = "#00000073";
};

document.onclick = function(event) {
    if (event.target.id === "exampleModal" || event.target.className.includes("close") ||
    event.target.parentNode.className.includes("close")) {
        // modaldan kenarda click olundu
        document.body.classList.remove("modal-open");
        modal.classList.remove("show");
        modal.style.display = "none";
    }
    else if (event.target.className.startsWith("modal") ||
        event.target.parentNode.className.startsWith("modal")) {
        // modalin icerisine click olundu
    }
};