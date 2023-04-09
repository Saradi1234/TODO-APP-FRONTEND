export const onSignupHandler = async (formObject, navigateToLogin) => {
    const username = formObject.username.value;
    const password = formObject.password.value;
    const confPassword = formObject.conf_password.value;
    if (password !== confPassword) {
        alert("Confirm Password didnot match")
        return
    }
    const response = await fetch("https://todo-app-backend-st84.onrender.com/signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    const data = await response.json();
    console.log(data.message);

    if (data.user) {
        navigateToLogin("/")
    }
    console.log(data);
}