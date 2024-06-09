function navbar() {
    var x = document.getElementById("navbar-responsive");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}