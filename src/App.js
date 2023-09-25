import React, { useState } from "react";
import "./styles.css";

//import List from "./List";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

let idAcc = 0;
const generateId = () => {
  idAcc += 1;
  return idAcc;
};

export default function App() {
  //Desconstruindo
  const [tasks, setTasks] = useState([]);

  //addTask
  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title="fasdf" />
      </div>
    </div>
  );
}
