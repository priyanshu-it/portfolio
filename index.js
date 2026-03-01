// Author: Priyanshu

// JavaScript code to copy the text to clipboard
document.addEventListener('copy', function (event) {
    event.clipboardData.setData('text/plain', 'priyanshu.html');
    event.preventDefault();
});

const toggleBtn = document.getElementById("themeToggle");
const icon = toggleBtn.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    icon.classList.replace("fa-moon", "fa-sun");
}

toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        icon.classList.replace("fa-moon", "fa-sun");
    } else {
        localStorage.setItem("theme", "light");
        icon.classList.replace("fa-sun", "fa-moon");
    }
});
// line 30