function navbar() {
    var x = document.getElementById("navbar-responsive");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function filterProjects(category) {
    let projects = document.querySelectorAll(".card");
    
    projects.forEach((project) => {
        if (category === "all") {
            project.classList.remove("hidden");
        } else {
            if (project.getAttribute("data-category") === category) {
                project.classList.remove("hidden");
            } else {
                project.classList.add("hidden");
            }
        }
    });
}