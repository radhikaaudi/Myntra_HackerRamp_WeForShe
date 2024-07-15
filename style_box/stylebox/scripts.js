document.addEventListener("DOMContentLoaded", function () {
    const wishlistForm = document.getElementById("wishlistForm");

    wishlistForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(this); // Create FormData object from form
        const params = new URLSearchParams(formData).toString(); // Convert FormData to URL parameters

        // Redirect to cart.html with form data as URL parameters
        window.location.href = "cart.html?" + params;
    });
});
