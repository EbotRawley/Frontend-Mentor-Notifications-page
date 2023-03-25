
///// Get number of unread notifications
window.onload = function () { getNotifications() }
function getNotifications() {
    cnt = document.getElementsByClassName('unread')
    let nots = Math.floor(cnt.length / 2)
    let not_cnt = document.getElementById('not_cnt')
    not_cnt.textContent = nots
}

////// MARK ALL AS READ FUNTION

function markAsRead() {
    // When the use clicks on it, remove all unread tags, therefore letting the state changes in css
    const unread_msgs = document.querySelectorAll('*')
    unread_msgs.forEach(msg => {
        msg.classList.remove('unread')
    });
    getNotifications();
}

////// SCROLL TO TOP FUNCTION

// Get the button:
let mybutton = document.getElementById("stt");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.visibility = "visible";
    } else {
        mybutton.style.visibility = "hidden";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    // document.getElementById("tt").style.visibility = "hidden"
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}