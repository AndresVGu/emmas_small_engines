

document.getElementById("validation-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Perform your validation here
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    window.location.href = "home.html";

});

document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    

    window.location.href = "home.html";

});