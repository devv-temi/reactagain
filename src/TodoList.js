import { useState } from "react";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (!newTask.trim()) return;
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completedTask = (id) => {
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <div className="addTask">
        <input value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="List">
        {todoList.map((task) => (
          <div key={task.id}>
            <h3 style={{ background: task.completed ? "green" : null }}>{task.taskName}</h3>
            <button onClick={() => completedTask(task.id)}>Completed</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;

{/* <h2>Todo List</h2>
      <TodoList /> */}