

// http://localhost:5000/tasks?q=rohit&_sort=text&_order=asc&_page=1&_limit=5

// ################################   crud operation with localStorage ##############################

import React, { useState, useEffect } from 'react';

const DedicatedCrud = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);

  // 1. READ: Data load karna (Mounting)
  useEffect(() => {
    const saved = localStorage.getItem('local_tasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // 2. STORAGE: Data save karna
  useEffect(() => {
    localStorage.setItem('local_tasks', JSON.stringify(tasks));
  }, [tasks]);

  // --- ALAG ALAG FUNCTIONS ---

  // CREATE FUNCTION
  const handleAdd = () => {
    if (!input.trim()) return;
    const newTask = { id: Date.now(), text: input };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  // DELETE FUNCTION
  const handleDelete = (id) => {
    const filtered = tasks.filter(t => t.id !== id);
    setTasks(filtered);
  };

  // START EDIT (Sirf input box mein data lane ke liye)
  const handleEditClick = (task) => {
    setEditId(task.id);
    setInput(task.text);
    // handleUpdate()
  };

  // UPDATE FUNCTION (Save changes)
  const handleUpdate = () => {
    const updated = tasks.map(t => 
      t.id === editId ? { ...t, text: input } : t
    );
    setTasks(updated);
    setEditId(null);
    setInput('');
  };

  // CANCEL FUNCTION
  const handleCancel = () => {
    setEditId(null);
    setInput('');
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h2>SpiceTech CRUD Task</h2>

      <div style={{ marginBottom: '20px' }}>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Enter task..."
        />
        
        {/* Conditional Buttons based on Mode */}
        {editId ? (
          <>
            <button onClick={handleUpdate} style={{ marginLeft: '5px', color: 'green' }}>Save Update</button>
            <button onClick={handleCancel} style={{ marginLeft: '5px' }}>Cancel</button>
          </>
        ) : (
          <button onClick={handleAdd} style={{ marginLeft: '5px' }}>Add Task</button>
        )}
      </div>

      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: '10px' }}>
            {task.text}
            <button onClick={() => handleEditClick(task)} style={{ marginLeft: '15px' }}>Edit</button>
            <button onClick={() => handleDelete(task.id)} style={{ marginLeft: '5px', color: 'red' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// export default DedicatedCrud;

// ################################   crud operation with json-server ##############################
// npx json-server --watch db.json --port 5000

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios import karna na bhoolein

const AxiosCrud = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  
  const API_URL = "http://localhost:5000/tasks";

  // 1. READ (GET)
  const fetchTasks = async () => {
    try {
      // Axios mein .json() karne ki zaroorat nahi hoti, data sidha mil jata hai
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error("Data load nahi ho paya:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // 2. CREATE (POST)
  const handleAdd = async () => {
    if (!input.trim()) return;
    try {
      const response = await axios.post(API_URL, { text: input });
      setTasks([...tasks, response.data]);
      setInput('');
    } catch (error) {
      alert("Add karne mein problem aayi");
    }
  };

  // 3. DELETE (DELETE)
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(t => t.id !== id));
    } catch (error) {
      console.error("Delete fail:", error);
    }
  };

  // 4. START EDIT
  const handleEditClick = (task) => {
    setEditId(task.id);
    setInput(task.text);
  };

  // 5. UPDATE (PUT)
  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${API_URL}/${editId}`, { text: input });
      setTasks(tasks.map(t => (t.id === editId ? response.data : t)));
      setEditId(null);
      setInput('');
    } catch (error) {
      console.error("Update fail:", error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h1>Axios + JSON-Server</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Enter task..."
          style={{ padding: '10px', width: '60%' }}
        />
        {editId ? (
          <button onClick={handleUpdate} style={{ backgroundColor: 'orange', padding: '10px', marginLeft: '5px' }}>Update</button>
        ) : (
          <button onClick={handleAdd} style={{ backgroundColor: 'green', color: 'white', padding: '10px', marginLeft: '5px' }}>Add</button>
        )}
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: '10px', background: '#f9f9f9', padding: '10px', border: '1px solid #ddd' }}>
            {task.text}
            <div style={{ float: 'right' }}>
              <button onClick={() => handleEditClick(task)} style={{ marginRight: '5px' }}>Edit</button>
              <button onClick={() => handleDelete(task.id)} style={{ color: 'red' }}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// export default AxiosCrud;

// ################################   pagination logic ##############################
// ?_page=${currentPage}&_limit=${postsPerPage}
// totalPosts / postsPerPage


import React, { useState, useEffect } from 'react';

const PaginationTask = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5); // Ek page par kitne items dikhane hain
  const totalPosts = 100; // API ke total records (humein pata hain JSONPlaceholder mein 100 hain)

  // 1. API Fetching based on Current Page
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        // API URL mein page aur limit pass karna
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}`
        );
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]); // Jab bhi currentPage badlega, API call hogi

  // 2. Logic to calculate total pages
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // 3. Handlers
  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const goToPrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '600px', margin: 'auto' }}>
      <h2 className="text-xl font-bold mb-4">SpiceTech Pagination Task</h2>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {posts.map(post => (
            <li key={post.id} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              <strong>{post.id}.</strong> {post.title}
            </li>
          ))}
        </ul>
      )}

      {/* Pagination Controls */}
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
        <button 
          onClick={goToPrev} 
          disabled={currentPage === 1}
          style={{ padding: '8px 12px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
        >
          Previous
        </button>

        <span>Page <strong>{currentPage}</strong> of {totalPages}</span>

        <button 
          onClick={goToNext} 
          disabled={currentPage === totalPages}
          style={{ padding: '8px 12px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
        >
          Next
        </button>
      </div>

      {/* Direct Page Numbers (Optional) */}
      <div style={{ marginTop: '15px', textAlign: 'center' }}>
        {[...Array(5)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              margin: '0 3px',
              padding: '5px 10px',
              backgroundColor: currentPage === index + 1 ? '#007bff' : '#fff',
              color: currentPage === index + 1 ? '#fff' : '#000'
            }}
          >
            {index + 1}
          </button>
        ))}
        <span>...</span>
      </div>
    </div>
  );
};

export default PaginationTask;
