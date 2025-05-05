userData = {
    firstName: document.querySelector("#firstName"),
    lastName: document.querySelector("#lastName"),
    email: document.querySelector("#email"),
    phone: document.querySelector("#phoneNumber"),
    password: document.querySelector("#password"),
    passwordConfirmation: document.querySelector("#passwordConfirmation"),
}

userData.passwordConfirmation.addEventListener("keyup", () => validConformation())
userData.password.addEventListener("keyup", () => validPassword())


function validPassword () {
    
}

function validConformation () {
    if (userData.passwordConfirmation.value !== userData.password.value) {
        userData.passwordConfirmation.classList.remove("greenBorder");
        if (!userData.passwordConfirmation.classList.contains("redBorder")) {
            userData.passwordConfirmation.classList.add("redBorder");
        } 
    } else {
        userData.passwordConfirmation.classList.remove("redBorder");
        userData.passwordConfirmation.classList.add("greenBorder");
    }
}

