// Author: Priyanshu

// JavaScript code to copy the text to clipboard
document.addEventListener('copy', function(event) { 
    event.clipboardData.setData('text/plain', 'priyanshu.html'); 
    event.preventDefault(); 
});