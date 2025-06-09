import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/site.css';
import Swal from "sweetalert2";

export default function Todoapp() {
    const [newItem, setNewItem] = useState(""); // for adding new task
    const [items, setItems] = useState([]);     // stores all tasks
    const [editId, setEditId] = useState(null); // stores the ID of the item being edited
    const [editText, setEditText] = useState(""); // for editing existing task

    const addTaskHandler = () => {
        if (!newItem.trim()) {
            Swal.fire("Please enter a task...");
            return;
        }

        setItems([...items, { id: Date.now(), text: newItem }]);
        setNewItem(""); // clear input
    };

    const deleteItemHandler = (id) => {
        setItems(items.filter(x => x.id !== id));
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

        setItems(items.map(x => x.id === editId ? { ...x, text: editText } : x));
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
                {items.map(x => (
                    <div key={x.id} className="bg-light text-success border border-success fs-5 d-flex justify-content-between align-items-center m-3 p-3 rounded">
                        {editId === x.id ? (
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
                                <span>{x.text}</span>
                                <div>
                                    <i
                                        onClick={() => startEditHandler(x.id, x.text)}
                                        className="fa fa-pencil text-primary me-3"
                                        style={{ cursor: "pointer" }}
                                    ></i>
                                    <i
                                        onClick={() => deleteItemHandler(x.id)}
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
