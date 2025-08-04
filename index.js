// Author: Priyanshu

// JavaScript code to copy the text to clipboard
document.addEventListener('copy', function (event) {
    event.clipboardData.setData('text/plain', 'priyanshu.html');
    event.preventDefault();
});

document.querySelectorAll('.skills-list li').forEach(li => {
    const percent = li.getAttribute('data-percent');
    const bar = li.querySelector('.progress-bar div');
    if (bar && percent) {
        bar.style.width = percent + '%';
    }
});