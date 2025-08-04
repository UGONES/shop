import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/site.css';

export default function Todoapp() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const addTaskHandler = async () => {
    if (!newItem.trim()) {
      Swal.fire("Please enter a task...");
      return;
    }

    const newTask = { id: Date.now(), text: newItem };
    setItems(prev => [...prev, newTask]);
    setNewItem("");
  };

  const deleteItemHandler = async (id) => {
    setItems(prev => prev.filter(task => task.id !== id));
    Swal.fire("Task deleted.");
  };

  const startEditHandler = (id, currentText) => {
    setEditId(id);
    setEditText(currentText);
  };

  const saveEditHandler = () => {
    if (!editText.trim()) {
      Swal.fire("Task cannot be empty.");
      return;
    }

    setItems(prev =>
      prev.map(task =>
        task.id === editId ? { ...task, text: editText } : task
      )
    );
    setEditId(null);
    setEditText("");
    Swal.fire("Task updated.");
  };

  return (
    <>
      <h1 className="text-center text-uppercase">Todo App</h1>
      <div className="todo-header d-flex flex-wrap justify-content-around m-3 p-3 rounded border-success">
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          placeholder="Enter task description..."
          type="text"
          className="fs-5 p-3 rounded me-5"
        />
        <button onClick={addTaskHandler} className="btn btn-dark p-3 fs-5">Add Task</button>
      </div>

      <div className="tasks">
        {items.map(task => (
          <div key={task.id} className="bg-light text-success border border-success fs-5 d-flex justify-content-between align-items-center m-3 p-3 rounded">
            {editId === task.id ? (
              <>
                <input
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                  className="form-control me-3"
                />
                <button onClick={saveEditHandler} className="btn btn-success me-2">Save</button>
              </>
            ) : (
              <>
                <span>{task.text}</span>
                <div>
                  <i
                    onClick={() => startEditHandler(task.id, task.text)}
                    className="fa fa-pencil text-primary me-3"
                    style={{ cursor: "pointer" }}
                  ></i>
                  <i
                    onClick={() => deleteItemHandler(task.id)}
                    className="fa fa-trash text-danger"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
