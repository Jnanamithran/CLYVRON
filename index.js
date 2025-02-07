// Hide the loader after a delay
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".loader-wrapper").style.display = "none";
    }, 3000); // Adjust time if needed
});

// Remove the loading screen after 5 seconds
setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
}, 2000);

window.onscroll = function() {

    if (window.pageYOffset > 50) { // Check if scrolled more than 50 pixels

        document.getElementById("navbar").style.top = "0"; 

    } else {

        document.getElementById("navbar").style.top = "-100px"; 

    }

};
function toggleMenu() {
    document.getElementById('menu').classList.toggle('show');
    document.querySelector('.menu-btn').classList.toggle('active');
}
// Set the sale end date (YYYY, MM (0-based), DD, HH, MM, SS)
const saleEndDate = new Date(2025, 1, 15, 23, 59, 59).getTime(); // Example: Feb 15, 2025, 11:59:59 PM

function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = saleEndDate - now;

    if (timeLeft <= 0) {
        document.getElementById("timer").innerText = "00:00:00";
        clearInterval(countdown);
        return;
    }
    
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    document.getElementById("timer").innerText = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

const countdown = setInterval(updateTimer, 1000);
updateTimer(); // Initialize immediately
