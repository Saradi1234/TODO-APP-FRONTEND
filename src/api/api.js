import axios from "axios"

// const base_URL = " http://localhost:8080"
const base_URL = " https://todo-app-backend-st84.onrender.com"

// CREATE TODO
export const createTodo = async (activity) => {
    const token = localStorage.getItem("AUTH_TOKEN")
    return await axios({
        method: "post",
        url: `${base_URL}/todo`,
        headers: { Authorization: token },
        data: { activity }
    })
}

// GET ALL TODOS
export const getTodos = async () => {
    const token = localStorage.getItem("AUTH_TOKEN")
    return await axios({
        method: "get",
        url: `${base_URL}/todo`,
        headers: { Authorization: token }
    })
}

// UPDATE TODO STATUS AND TIME
export const updateTodoStatusTime = async (id, status, time_taken) => {
    const token = localStorage.getItem("AUTH_TOKEN")
    return await axios({
        method: "put",
        url: `${base_URL}/todo/${id}`,
        headers: { Authorization: token },
        data: { status, time_taken }
    })
}

// UPDATE A TODO
export const updateTodoDeleted = async (id, isDeleted) => {
    const token = localStorage.getItem("AUTH_TOKEN")
    return await axios({
        method: "put",
        url: `${base_URL}/todo/${id}`,
        headers: { Authorization: token },
        data: { isDeleted }
    })
}

// DELETE A TODO
export const deleteOneTodo = async (id) => {
    const token = localStorage.getItem("AUTH_TOKEN")
    console.log(id);
    return await axios({
        method: "delete",
        url: `${base_URL}/todo/${id}`,
        headers: { Authorization: token },
    })
}

// CLEAR HISTORY
export const clearHistory = async () => {
    const token = localStorage.getItem("AUTH_TOKEN")
    return await axios({
        method: "delete",
        url: `${base_URL}/todo`,
        headers: { Authorization: token },
    })
}