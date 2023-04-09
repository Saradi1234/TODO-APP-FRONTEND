import { setUser } from "../store/AppStore"

async function onLoginHandler(formObject, navigateToTodos) {
    
    console.log("event occured on:",formObject);

    const username = formObject.username.value;
    const password = formObject.password.value;
    setUser(username)

    const response = await fetch("https://todo-app-backend-st84.onrender.com/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    const data = await response.json();
    // console.log(data.token);

    if (data.token) {
        (localStorage.setItem("AUTH_TOKEN", (data.token)))
        navigateToTodos("/todosList")
    } else {
        alert(data.message);
    }
}

export default onLoginHandler