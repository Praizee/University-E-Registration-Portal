// show/hide password
function Function01() {
    var x = document.getElementById("Input01");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// new password
function Function02() {
    var x = document.getElementById("Input02");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// confirm new password
function Function03() {
    var x = document.getElementById("Input03");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}





//delete account modal popup

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}