window.onscroll = function() {

    if (window.pageYOffset > 50) { // Check if scrolled more than 50 pixels

        document.getElementById("navbar").style.top = "0"; 

    } else {

        document.getElementById("navbar").style.top = "-100px"; 

    }

};