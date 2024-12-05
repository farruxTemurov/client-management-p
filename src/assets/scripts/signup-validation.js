document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get input elements
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Get error message elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Reset error messages and styles
    clearErrors();

    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        nameInput.classList.add("error");
        isValid = false;
    }

    // Validate email
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        emailInput.classList.add("error");
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailError.textContent = "Enter a valid email address.";
        emailInput.classList.add("error");
        isValid = false;
    }

    // Validate password
    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required.";
        passwordInput.classList.add("error");
        isValid = false;
    } else if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        passwordInput.classList.add("error");
        isValid = false;
    }

    // If form is valid, submit it
    if (isValid) {
        alert("Form submitted successfully!");

        // Trigger Angular's state change to hide the form
        // This should trigger Angular's change detection to show the success message
        // We call this method to set `isFormSubmitted` to `true`:
        // Since you're using plain JavaScript, you need to manually update Angular's state
        // Find Angular component's DOM element and update its state
        const angularComponent = document.querySelector('app-sign-up');
        if (angularComponent) {
            angularComponent.__ngContext__.view.component.isFormSubmitted = true;
        }

        // Optionally reset the form or perform other actions
        document.getElementById("myForm").reset();
    }
});

function clearErrors() {
    document.querySelectorAll(".error").forEach(input => input.classList.remove("error"));
    document.querySelectorAll(".error-message").forEach(message => message.textContent = "");
}
