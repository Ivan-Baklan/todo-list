import { useEffect, useState } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import { v4 as uuidv4 } from "uuid";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm";
import "./ToDoList.css";

function ToDoList() {
  const [toDoList, setToDo] = useState(() => {
    let storageData = localStorage.getItem("listData");
    let array = JSON.parse(storageData);
    return array || [];
  });
  const [toDoTask, setTask] = useState({
    id: 0,
    title: "",
    completed: false,
  });

  useEffect(() => {
    localStorage.setItem("listData", JSON.stringify(toDoList));
  }, [toDoList, setToDo]);

  const changeHandle = (event) => {
    setTask({
      id: uuidv4(),
      title: event.target.value,
      completed: false,
    });
  };

  const completeTask = (elem) => {
    const updatedToDo = [...toDoList];
    const doneIndex = toDoList.indexOf(elem);
    updatedToDo[doneIndex].completed = true;
    setToDo(updatedToDo);
  };

  const appendHandle = (event) => {
    event.preventDefault();
    const uniqueTask =
      toDoList.find(
        (elem) => elem.id === toDoTask.id || elem.title === toDoTask.title
      ) ?? toDoTask;
    if (!toDoList.includes(uniqueTask) && toDoTask.id !== 0) {
      setToDo([...toDoList, uniqueTask]);
    }
    setTask({ id: 0, title: "", completed: false });
  };

  const removeHandle = (elem) => {
    return setToDo(toDoList.filter((_elem) => _elem.id !== elem.id));
  };
  return (
    <div className="ToDo-Container">
      <h1>To Do App</h1>
      <CreateTaskForm
        title={toDoTask.title}
        setTask={changeHandle}
        changeHandle={appendHandle}
      />

      <div className="ItemsList">
        {toDoList.length > 0 ? (
          toDoList.map((elem) => (
            <ToDoItem
              elem={elem}
              key={elem.id}
              removeHandle={removeHandle}
              completeTask={completeTask}
            />
          ))
        ) : (
          <p>Empty List</p>
        )}
      </div>
    </div>
  );
}

export default ToDoList;
