//Show Login Page
var is_login = false;

function toggle_login() {
    is_login = !is_login;
    var overlay = document.getElementById("login-overlay");

    if (is_login) {
        overlay.style.clipPath ='circle(140% at 91% 9.5%)';
        document.body.classList.add('overflow-hidden');
    } else {
        overlay.style.clipPath = 'circle(0% at 91% 9.5%)';
        document.body.classList.remove('overflow-hidden')
    }
}