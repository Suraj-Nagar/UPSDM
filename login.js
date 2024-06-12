document.addEventListener("DOMContentLoaded", function() {
    const loginOption1Button = document.getElementById("loginOption1");
    const loginOption2Button = document.getElementById("loginOption2");
    const loginForm1 = document.getElementById("loginForm1");
    const loginForm2 = document.getElementById("loginForm2");

    // Initial setup: Show candidate login, hide official login
    loginForm1.classList.remove("hidden");
    loginForm2.classList.add("hidden");

    // Event listeners for buttons
    loginOption1Button.addEventListener("click", function() {
        loginForm1.classList.remove("hidden");
        loginForm2.classList.add("hidden");
    });

    loginOption2Button.addEventListener("click", function() {
        loginForm1.classList.add("hidden");
        loginForm2.classList.remove("hidden");
    });
});
