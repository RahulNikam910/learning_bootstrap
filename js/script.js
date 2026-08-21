function validate() {
    const name = document.getElementById("name").value.trim();
    if (name == "") {
        document.getElementById("nameError").innerHTML = "Please enter your name";
        return false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    const email = document.getElementById("email").value.trim();
    if (email == "") {
        document.getElementById("emailError").innerHTML = "Please enter your Email ID";
        return false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    const phone = document.getElementById("phone").value.trim();
    if (phone == "") {
        document.getElementById("phoneError").innerHTML = "Please enter your Mobile Number";
        return false;
    } else {
        document.getElementById("phoneError").innerHTML = "";
    }

    const subject = document.getElementById("subject").value.trim();
    if (subject == "") {
        document.getElementById("subjectError").innerHTML = "Enter Your subject";
        return false;
    } else {
        document.getElementById("subjectError").innerHTML = "";
    }

    const message = document.getElementById("message").value.trim();
    if (message == "") {
        document.getElementById("messageError").innerHTML = "Enter your message";
        return false;
    } else {
        document.getElementById("messageError").innerHTML = "";
    }

    document.getElementById("successMessage").innerHTML = "✓ Your message has been submitted successfully!";
    return false;
}
