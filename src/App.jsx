import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/home/Home";
import Task from "./components/tasks/Task";
import User from "./components/users/User";
import AddTask from "./components/tasks/AddTask";
import AddUser from "./components/users/AddUser";
import DoTask from "./components/tasks/DoTask";
import CheckTask from "./components/tasks/CheckTask";
import DelayTask from "./components/tasks/DelayTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/dashboard/user" element={<User />}></Route>
          <Route path="/dashboard/add_user" element={<AddUser />}></Route>
          <Route path="/dashboard/task" element={<Task />}></Route>
          <Route path="/dashboard/add_tasks" element={<AddTask />}></Route>
          <Route path="/dashboard/do_tasks" element={<DoTask />}></Route>
          <Route path="/dashboard/check_task" element={<CheckTask />}></Route>
          <Route path="/dashboard/delay_task" element={<DelayTask />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
