import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import TODO from "./Components/TODO"
import History from "./Components/History"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todosList" element={<TODO />} />
        <Route path="/todosHistory" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;