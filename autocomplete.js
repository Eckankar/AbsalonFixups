function $(id) { return document.getElementById(id); }

function enableAutocomplete() {
    $('Login_username_input').removeAttribute('autocomplete');
    $('Login_password_input').removeAttribute('autocomplete');
}

window.addEventListener('DOMContentLoaded', enableAutocomplete, false);
