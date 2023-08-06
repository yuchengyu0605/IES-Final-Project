document.addEventListener('DOMContentLoaded', function () {
    var passwordField = document.getElementById('Input_Password');

    if (passwordField) {
        // Create the toggle password button
        var toggleButton = document.createElement('button');
        toggleButton.type = 'button';
        toggleButton.textContent = 'Show Password';
        toggleButton.style.marginLeft = '10px';

        // Function to toggle password visibility
        toggleButton.addEventListener('click', function () {
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                toggleButton.textContent = 'Hide Password';
            } else {
                passwordField.type = 'password';
                toggleButton.textContent = 'Show Password';
            }
        });

        // Insert the toggle button after the password field
        passwordField.parentNode.insertBefore(toggleButton, passwordField.nextSibling);

        // Add the password requirements container
        var requirementsContainer = document.createElement('div');
        requirementsContainer.innerHTML = `
            <div id="passwordRequirements">
                <p id="lengthRequirement">At least 6 characters</p>
                <p id="digitRequirement">At least one number</p>
                <p id="uppercaseRequirement">At least one uppercase letter</p>
                <p id="specialCharRequirement">At least one special character</p>
            </div>
        `;
        toggleButton.parentNode.insertBefore(requirementsContainer, toggleButton.nextSibling);

        // Add event listener for password input
        passwordField.addEventListener('input', function () {
            var password = this.value;

            // Check each requirement and update the color of the requirement text
            document.getElementById('lengthRequirement').style.color = password.length >= 6 ? 'green' : 'black';
            document.getElementById('digitRequirement').style.color = /\d/.test(password) ? 'green' : 'black';
            document.getElementById('uppercaseRequirement').style.color = /[A-Z]/.test(password) ? 'green' : 'black';
            document.getElementById('specialCharRequirement').style.color = /\W/.test(password) ? 'green' : 'black';
        });
    }
});

