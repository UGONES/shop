import React, { useState } from "react";
import Swal from "sweetalert2";
import '../css/site.css';
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";

export default function ExpenseTracker() {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editExpense, setEditExpense] = useState("");
  const [editAmount, setEditAmount] = useState("");

  const addExpense = () => {
    if (!expense || !amount) {
      Swal.fire("Please enter both title and amount");
      return;
    }

    setExpenses([
      ...expenses,
      { id: Date.now(), expense, amount, timestamp: new Date().toLocaleString() },
    ]);

    setExpense("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
    Swal.fire("Expense deleted");
  };

  const startEdit = (id, currentExpense, currentAmount) => {
    setEditId(id);
    setEditExpense(currentExpense);
    setEditAmount(currentAmount);
  };

  const saveEdit = (id) => {
    if (!editExpense || !editAmount) {
      Swal.fire("Please fill out all fields");
      return;
    }

    const updated = expenses.map((item) =>
      item.id === id
        ? { ...item, expense: editExpense, amount: editAmount }
        : item
    );
    setExpenses(updated);
    setEditId(null);
    Swal.fire("Expense updated");
  };

  return (
    <div className="container py-5">
      <h1 className="text-center text-uppercase mb-4">Expense Tracker</h1>

      {/* Input Section */}
      <div className="d-flex flex-wrap justify-content-center mb-4 gap-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Expense"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
          style={{ maxWidth: "250px" }}
        />
        <input
          type="number"
          className="form-control"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ maxWidth: "150px" }}
        />
        <button className="btn btn-success" onClick={addExpense}>
          Add
        </button>
      </div>

      {/* List Section */}
      {expenses.length === 0 ? (
        <p className="text-center text-muted">No expenses yet.</p>
      ) : (
        expenses.map((item) => (
          <div
            key={item.id}
            className="bg-light border border-success text-success rounded d-flex justify-content-between align-items-center p-3 mb-3"
          >
            <div>
              {editId === item.id ? (
                <>
                  <input
                    value={editExpense}
                    onChange={(e) => setEditExpense(e.target.value)}
                    className="form-control mb-2"
                    style={{ maxWidth: "200px" }}
                  />
                  <input
                    type="number"
                    value={editAmount}
                    onChange={(e) => setEditAmount(e.target.value)}
                    className="form-control"
                    style={{ maxWidth: "120px" }}
                  />
                </>
              ) : (
                <>
                  <h5 className="mb-1">{item.expense}</h5>
                  <p className="mb-0">Amount: ${item.amount}</p>
                  <small className="text-muted">{item.timestamp}</small>
                </>
              )}
            </div>

            <div className="d-flex align-items-center gap-3">
              {editId === item.id ? (
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => saveEdit(item.id)}
                >
                  <FaSave />
                </button>
              ) : (
                <button
                  className="btn btn-sm btn-outline-warning"
                  onClick={() => startEdit(item.id, item.expense, item.amount)}
                >
                  <FaEdit />
                </button>
              )}

              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteExpense(item.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
