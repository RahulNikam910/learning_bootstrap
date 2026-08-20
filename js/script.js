function validate() {
    const name = document.getElementById("name").value.trim();

    if (name == "") {
        alert("Please enter your name");
        return false;
    }

    const email = document.getElementById("email").value.trim();

    if (email == "") {
        alert("Please enter your email");
        return false;
    }

    const phone = document.getElementById("phone").value.trim();

    if (phone == "") {
        alert("Please enter your phone number");
        return false;
    }

    const subject = document.getElementById("subject").value.trim();

    if (subject == "") {
        alert("Please enter a subject");
        return false;
    }

    const message = document.getElementById("message").value.trim();

    if (message == "") {
        alert("Please enter your message");
        return false;
    }

    return true;
}
