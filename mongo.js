// Step 1: Backend Setup (Node.js + Express + MongoDB)
// Pehle ek server.js file banayein aur npm install express mongoose cors axios karein.

JavaScript
// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// 1. Local MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/spicetech_db')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// 2. Schema aur Model
const TaskSchema = new mongoose.Schema({ text: String });
const Task = mongoose.model('Task', TaskSchema);

// --- API ROUTES ---

// READ
app.get('/api/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// CREATE
app.post('/api/tasks', async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.json(newTask);
});

// UPDATE
app.put('/api/tasks/:id', async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTask);
});

// DELETE
app.delete('/api/tasks/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// app.listen(5000, () => console.log("Server running on port 5000"));
// Step 2: Frontend (React + Axios)
// Ab React mein wahi Axios wala logic use hoga, bas URL aapke local server ka hoga.

JavaScript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MongoCrud = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  
  const API_URL = "http://localhost:5000/api/tasks";

  // FETCH ALL
  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
  };

  useEffect(() => { fetchTasks(); }, []);

  // CREATE / UPDATE
  const handleSubmit = async () => {
    if (editId) {
      const res = await axios.put(`${API_URL}/${editId}`, { text: input });
      setTasks(tasks.map(t => t._id === editId ? res.data : t));
      setEditId(null);
    } else {
      const res = await axios.post(API_URL, { text: input });
      setTasks([...tasks, res.data]);
    }
    setInput('');
  };

  // DELETE
  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  const startEdit = (task) => {
    setEditId(task._id); // MongoDB mein id '_id' hoti hai
    setInput(task.text);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>MERN CRUD (Local MongoDB)</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>{editId ? 'Update' : 'Add'}</button>

      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.text}
            <button onClick={() => startEdit(task)}>Edit</button>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// export default MongoCrud;
// Interviewer ke liye Kuch Pro-Tips:
// _id vs id: MongoDB mein default unique identifier _id hota hai na ki id. React code mein task._id use karna mat bhoolna.

// CORS: Backend mein app.use(cors()) likhna zaroori hai, warna React ko API access karne se browser rok dega.

// Mongoose: Interviewer ko batana ki aapne Mongoose use kiya hai kyunki yeh data modelling aur validation ko aasan bana deta hai.

// Local Connection: mongodb://127.0.0.1:27017/ local database ka standard address hai.