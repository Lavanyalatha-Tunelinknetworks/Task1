document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {

        event.preventDefault();

        var userType = document.querySelector('select[name="userType"]').value;
        var username = document.querySelector('input[name="username"]').value;
        var password = document.querySelector('input[name="password"]').value;

        if (!userType || !username || !password) {
            alert('Please fill in all fields.');
            return; 
        }

        alert('Logging in as ' + userType + ' - ' + username);
    });
});
