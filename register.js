document.addEventListener('DOMContentLoaded', function() {
    var registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var userType = document.querySelector('select[name="userType"]').value;
        var username = document.querySelector('input[name="username"]').value;
        var password = document.querySelector('input[name="password"]').value;
        var confirmPassword = document.querySelector('input[name="confirmPassword"]').value;
        if (!userType || !username || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return; 
        }

    
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
 return; 
        }

        alert('Registering ' + userType + '-' + username);
    });
});
