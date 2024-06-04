const form = document.forms[0];
const name = document.getElementById("name");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const textarea = document.getElementById("textarea");
const email = document.getElementById("email");
const input = document.querySelectorAll("input");
const label = document.querySelectorAll("label")
const alerting = document.querySelector(".alert");
const close = document.getElementById("close");
close.onclick = function () {
    alerting.style.opacity = 0;
}
document.onclick = function () {
    alerting.style.opacity = 0;


}

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("focus", () => {
        label[i].style.top = "-10px";

    })

}

input.forEach((item) => {
    const father = item.parentElement;
    const icon = document.createElement("ion-icon");

    // Add warning class for initial styling (optional)
    icon.classList.add("warning");

    father.appendChild(icon);

    item.addEventListener("input", function () {
        if (item.value === "" || item.value === null) {
            // Set error styles for empty or null values
            item.style.borderColor = "#e5383b";
            icon.setAttribute("name", "alert-outline");
            icon.style.background = "red";

        } else if (item.value.length > 0) {
            // Set success styles for non-empty values (optional)
            item.style.borderColor = "green";
            icon.setAttribute("name", "checkmark-outline");
            icon.style.background = "green";
        } else {
            // Handle unexpected cases (e.g., negative length)
            console.warn("Unexpected input length for element:", item);
        }
    });
});
textarea.addEventListener("focus", () => {
    label[label.length - 1].style.top = "-13px";
    textarea.style.opacity = ".4"
})

form.addEventListener("submit", (e) => {
    // Validate all input elements within the form
    let allGood = true;
    // looping on all inputs to checking if its empty
    input.forEach((element) => {
        if (element.value.length == 0) {
            allGood = false;

        }
    })
    // Prevent form submission and display error message if validation fails
    if (!allGood) {
        e.preventDefault();
        alerting.style.opacity = 1;
        alerting.style.top = "20px";
       


    } else {
        // Form is valid, proceed with submission logic (e.g., using fetch or an AJAX library)
        console.log("Form submission successful (assuming server-side validation is also implemented).");
        // Implement your form submission logic here
    }
});


