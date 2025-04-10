const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");
const themeIcon = toggleButton.querySelector("i");

// Cek preferensi dark mode dari localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    themeIcon.classList.replace("ri-moon-fill", "ri-sun-fill");
}

// Toggle Dark Mode
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeIcon.classList.replace("ri-moon-fill", "ri-sun-fill"); // Ganti ikon ke matahari
    } else {
        localStorage.setItem("theme", "light");
        themeIcon.classList.replace("ri-sun-fill", "ri-moon-fill"); // Ganti ikon ke bulan
    }
});

function toggleNavbar() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === "flex") {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

const courses = [
    {
        title: "Why is the Honeycomb Hexagonal",
        description: "Bees are extraordinary creatures that play a vital role in pollination, supporting ecosystems and food production. But...",
        date: "Sep 30, 2024",
        link: "https://arsyadmuh.medium.com/why-is-the-honeycomb-hexagonal-6377dc0cfb1a",
        img: "assets/python.png",
        dataCategory: "math"
    }, {
        title: "Introduction to Functional Programming in Python Different Paradigm",
        description: "Explore the power of functional programming in Python",
        date: "Aug 29, 2024",
        link: "https://arsyadmuh.medium.com/introduction-to-functional-programming-in-python-embracing-a-different-paradigm-e1d173606bcc",
        img: "assets/python.png",
        dataCategory: "python"
    }, {
        title: "Mastering Python Comments: A Guide to Writing Clear and Maintainable Code",
        description: "Unlock the power of comments in Python! Learn best practices for single-line, multi-line, adn docstring comments to make your...",
        date: "Aug 27, 2024",
        link: "https://arsyadmuh.medium.com/mastering-python-comments-a-guide-to-writing-clear-and-maintainable-code-70494b827d54",
        img: "assets/python.png",
        dataCategory: "python"
    }, {
        title: "Boost Your Coding Efficiency: Writing Python Code Like a Pro",
        description: "Discover how to write efficient Python code! Learn key techniques to boost performance, save resource, and optimized...",
        date: "Aug 15, 2024",
        link: "https://arsyadmuh.medium.com/boost-your-coding-efficiency-writing-python-code-like-a-pro-1e8a302ade47",
        img: "assets/python.png",
        dataCategory: "python"
    },
    
    // Tambahkan course lain jika ada
];


const options = {
    keys: ["title", "description"],
    threshold: 0.3 // Semakin kecil, semakin ketat pencariannya
};

const fuse = new Fuse(courses, options);


document.getElementById("search").addEventListener("input", function () {
    const query = this.value.trim(); // Hapus spasi di awal & akhir input
    const container = document.querySelector(".blog-container");
    container.innerHTML = ""; // Bersihkan kontainer sebelum menampilkan hasil

    // Jika input kosong, tampilkan semua kursus
    const filteredCourses = query ? fuse.search(query).map(r => r.item) : courses;

    filteredCourses.forEach(course => {
        container.innerHTML += `
            <div class="article" data-category="${course.dataCategory}">
                <div class="text-content">
                    <h2>${course.title}</h2>
                    <p class="desc">${course.description}</p>
                    <span class="date">${course.date}</span>
                    <br><a href="${course.link}" class="readmore" target="_blank">Baca Selengkapnya</a>
                </div>
                <img src="${course.img}" alt="">
            </div>
        `;
    });
});

function filterProjects(category) {
    let projects = document.querySelectorAll(".article");
    
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