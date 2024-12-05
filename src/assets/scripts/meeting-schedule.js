document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Select all inputs and their corresponding error message containers
    const inputs = document.querySelectorAll("#myForm input");
    let isValid = true;

    inputs.forEach(input => {
        const errorMessage = input.nextElementSibling; // Error message container
        if (input.value.trim() === "") {
            // If the field is empty, show an error message
            errorMessage.textContent = "This field cannot be empty";
            errorMessage.style.color = "red";
            isValid = false;
        } else {
            // Clear the error message if the field is not empty
            errorMessage.textContent = "";
        }
    });

    // If all fields are valid, proceed with form submission (optional logic)
    if (isValid) {
        alert("Form submitted successfully!");
        // You can include your form submission logic here
    }
}); 