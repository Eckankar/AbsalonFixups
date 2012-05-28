function $(id) { return document.getElementById(id); }

function enableAutocomplete() {
    $('ctl03_Login_username_input').removeAttribute('autocomplete');
    $('ctl03_Login_password_input').removeAttribute('autocomplete');
}

window.addEventListener('DOMContentLoaded', enableAutocomplete, false);
