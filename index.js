// Typed.js configuration
var typed = new Typed(".loading-text", {
    strings: ["Loading.", "Loading..", "Loading...", "Loading...."],
    typeSpeed: 125,
    showCursor: false
});

// Remove the loading screen after 5 seconds
setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
}, 3000);

window.onscroll = function() {

    if (window.pageYOffset > 50) { // Check if scrolled more than 50 pixels

        document.getElementById("navbar").style.top = "0"; 

    } else {

        document.getElementById("navbar").style.top = "-100px"; 

    }

};