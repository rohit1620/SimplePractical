// Topic 1: JSX
let JSX=()=>{
    // 🔹 Basic JSX Syntax
    function App() {
  return (
    <div>
      <h1>Hello Rohit!</h1>
      <p>Welcome to JSX world</p>
    </div>
  );
}

// 🔹 Using JavaScript inside JSX
const userName = "Rohit";

function App() {
  return <h2>Hello, {userName} 👋</h2>;
}

// 🔹 JSX must return a single root element
function App() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  );
}

// 🔹 Inline Styles in JSX
function App() {
  return <h2 style={{ color: "blue", fontSize: "24px" }}>Styled Text</h2>;
}

// 🔹 Conditional JSX (Ternary Operator)
const isLoggedIn = true;

function App() {
  return <h3>{isLoggedIn ? "Welcome back!" : "Please login"}</h3>;
}

// 🔹 Rendering List in JSX
const fruits = ["Apple", "Banana", "Mango"];

function App() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}



}

// ✅ (2) React Functional Components
let FunctionalComponents=()=>{
    // 🔹 Basic Functional Component
    function Welcome() {
  return <h1>Welcome to React, Rohit!</h1>;
}

// 🔹 Using Component inside Another Component
function Header() {
  return <h2>This is Header</h2>;
}

function App() {
  return (
    <div>
      <Header />
      <p>This is inside App component</p>
    </div>
  );
}

// 🔹 Component with Props (Passing Data)
function Greet(props) {
  return <h3>Hello, {props.name}!</h3>;
}

function App() {
  return <Greet name="Rohit" />;
}

// 🔹 Destructuring Props
function Greet({ name, age }) {
  return <p>{name} is {age} years old</p>;
}

function App() {
  return <Greet name="Rohit" age={24} />;
}

// 🔹 Component Returning List of Elements
function ListItems({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  return <ListItems items={["React", "Node", "MongoDB"]} />;
}

// 🔹 Component Folder Structure (Best Practice)
// /src
//   /components
    Header.jsx
    Footer.jsx
    UserCard.jsx



}

// ✅ (3) useState Hook

let useState=()=>{
    // 🔹 1. Counter Example
    // import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// 🔹 2. Toggle Show/Hide Example
function Toggle() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Text
      </button>
      {show && <p>This is a toggle-able text!</p>}
    </div>
  );
}

// 🔹 3. Input Field Handling
function InputBox() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </div>
  );
}

// 🔹 4. Array Update with useState
function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, `Task ${tasks.length + 1}`]);
  };

  return (
    <div>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

// 🔹 5. Object Update with useState
function Profile() {
  const [user, setUser] = useState({ name: "", age: "" });

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Age"
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />
      <p>
        Name: {user.name}, Age: {user.age}
      </p>
    </div>
  );
}

// 🔹 6. Multiple useState Example
function MultiCounter() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div>
      <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
      <button onClick={() => setDislikes(dislikes + 1)}>👎 {dislikes}</button>
    </div>
  );
}

}

// ✅ Topic 4: useEffect Hook – API Calls, Lifecycle, Side Effects
let useEffect=()=>{
    // 🔹 1. Run on First Render (componentDidMount)
    // import { useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return <h2>Hello Rohit!</h2>;
}

// 🔹 2. Run on State Change
// import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed to:", count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

// 🔹 3. Fetch API Data (GET Request)
// import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// 🔹 5. Dependency Array Trap (Important)
useEffect(() => {
  console.log("Runs every time");
}); // No dependency — runs on every render

useEffect(() => {
  console.log("Runs only once");
}, []); // Empty array — runs once (on mount)

useEffect(() => {
  console.log("Runs when name changes");
}, [name]); // Runs when `name` state changes

}

// ✅ Topic 5: Conditional Rendering 
let ConditionalRendering=()=>{
    // 🔹 1. Simple If-Else using Ternary
    function Greeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please log in."}</h1>;
}

// 🔹 2. Using && for Conditional Rendering
function Notification({ message }) {
  return <div>{message && <p>Notification: {message}</p>}</div>;
}

// 🔹 3. Render Different Components Conditionally
function UserStatus({ isOnline }) {
  if (isOnline) {
    return <p>User is Online</p>;
  }
  return <p>User is Offline</p>;
}

// 🔹 4. Switch Case Conditional Rendering
function Page({ page }) {
  switch (page) {
    case "home":
      return <h2>Home Page</h2>;
    case "about":
      return <h2>About Us</h2>;
    case "contact":
      return <h2>Contact Us</h2>;
    default:
      return <h2>404 Not Found</h2>;
  }
}

// 🔹 5. Conditional Class or Style
function Button({ isActive }) {
  return (
    <button style={{ backgroundColor: isActive ? "green" : "gray" }}>
      {isActive ? "Active" : "Inactive"}
    </button>
  );
}


}

// ✅ Topic 6: Handling Forms in React – Controlled Components & Validation
let HandlingForm=()=>{
    // 🔹 1. Controlled Input Field
    // import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);

  return (
    <form>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
      <p>Your name is: {name}</p>
    </form>
  );
}

// 🔹 2. Multiple Inputs Handling
function UserForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>
    </form>
  );
}

// 🔹 3. Form Submission
function LoginForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// 🔹 4. Simple Validation Example
function EmailForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.includes("@")) {
      setError("Invalid email address");
    } else {
      setError("");
    }
  };

  return (
    <form>
      <input type="email" value={email} onChange={handleChange} placeholder="Email" />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

// 🔹 5. Reset Form on Submit
function ContactForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent: " + message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message"
      />
      <button type="submit">Send</button>
    </form>
  );
}

// 🔹 6. Form management with multiple input fields
// import React, { useState } from "react";

function MultiInputForm() {
  // State object jisme sare inputs ki values rakhi hain
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Input change handler jo dynamically state update karta hai
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: value, // Jo input change hua uska name key ke roop me use karke value update karte hain
    }));
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Yahan aap API call ya koi aur action kar sakte ho
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Your Name"
        />
      </div>

      <div>
        <label>Email: </label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Your Email"
        />
      </div>

      <div>
        <label>Password: </label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          placeholder="Your Password"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

}

// ✅ Topic 7: React Router Basics – Navigation, Routes, Link, Params
let RouterBasics=()=>{
    // 🔹 1. Setup React Router
    // npm install react-router-dom

    // 🔹 2. Basic Routing Example
    // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

// 🔹 3. URL Params Example
// import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams();
  return <h2>User Profile for ID: {userId}</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

// 🔹 4. Navigate Programmatically
// import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // login logic here
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
}

// 🔹 5. Nested Routes

}

// ✅ Topic 8: React Context API – State Sharing Without Props Drilling
let ContextApi=()=>{
// 🔹 1. Create Context
// import { createContext } from "react";
// export const ThemeContext = createContext();[]

// 🔹 2. Provide Context Value
// import { useState } from "react";
// import { ThemeContext } from "./ThemeContext";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 🔹 3. Consume Context in Child Component
// import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#333" : "#eee",
      }}
    >
      Current Theme: {theme}
    </button>
  );
}

// 🔹 4. Use Context Provider in App
// import ThemeProvider from "./ThemeProvider";
// import ThemedButton from "./ThemedButton";

function App() {
  return (
    <ThemeProvider>
      <ThemedButton />
      {/* other components */}
    </ThemeProvider>
  );
}


}

// ✅ Topic 9: React Performance Optimization – React.memo, useMemo, useCallback
let PerformanceOptimaization=()=>{
// 🔹 1. React.memo() – Avoid Unnecessary Re-renders
const Child = React.memo(({ count }) => {
  console.log("Child rendered");
  return <p>Count is: {count}</p>;
});

function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <>
      <Child count={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOther(other + 1)}>Other Change</button>
    </>
  );
}

// 🔹 2. useMemo() – Memoize Expensive Calculations
function App() {
  const [count, setCount] = useState(0);
  const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  return (
    <>
      <h2>Expensive Value: {expensiveValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

// 🔹 3. useCallback() – Memoize Functions
function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!", count);
  }, [count]);

  return <button onClick={handleClick}>Click me</button>;
}

// 🔹 4. Combine React.memo + useCallback
const Child1 = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);

  return (
    <>
      <Child1 onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

 // 🟡 1. useRef – Access DOM & Hold Mutable Value (without re-render)
  // 📌 A. Use for focusing input:
  // import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="p-4">
      <input ref={inputRef} type="text" className="border p-2" />
      <button onClick={handleFocus} className="ml-2 bg-blue-500 text-white px-4 py-2">
        Focus Input
      </button>
    </div>
  );
}

// 📌 B. Use for storing previous value:
// import { useEffect, useRef, useState } from "react";

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div className="p-4">
      <h2>Current: {count}</h2>
      <h3>Previous: {prevCount.current}</h3>
      <button onClick={() => setCount(count + 1)} className="bg-green-600 text-white px-4 py-2">
        ➕ Increment
      </button>
    </div>
  );
}
}
// ✅ Topic 10: React Custom Hooks – Reuse Complex Logic Easily
let customHook=()=>{
// 🔹 1. What is a Custom Hook?
// A function that starts with use and lets you extract and reuse logic from components.

// 🔹 2. Basic Custom Hook Example – useCounter
// useCounter.js
// import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  return { count, increment, decrement, reset };
}
// export default useCounter;

// ✅ Use in a Component:
// import useCounter from "./useCounter";

function CounterApp() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>➕</button>
      <button onClick={decrement}>➖</button>
      <button onClick={reset}>🔁</button>
    </div>
  );
}

// 🔹 3. Custom Hook with Side Effects – useFetch
// useFetch.js
// import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
// export default useFetch;

// ✅ Use in Component:
// import useFetch from "./useFetch";

function UserList() {
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
}
// ✅ Topic 11: React + Tailwind CSS Integration – Real UI Setup & Styling
let tailwindCss=()=>{
// 🔹 1. Tailwind Install in React App
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p

// 🛠 Edit tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"], // React files
  theme: {
    extend: {},
  },
  plugins: [],
}

// 🛠 Create src/index.css and add:
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// 🛠 Import index.css in index.js
// import './index.css';

// 🔹 2. Basic Tailwind Example
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">Welcome to Tailwind + React!</h1>
    </div>
  );
}

// 🔹 3. Responsive Navbar with Tailwind + React
function Navbar() {
  return (
    <nav className="bg-blue-700 p-4 text-white flex justify-between">
      <div className="text-xl font-bold">MyApp</div>
      <div className="space-x-4 hidden md:block">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}

// 🔹 4. Buttons, Cards, Forms – Common UI Elements
// ✅ Button:
<>
<button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
  Submit
</button>


// ✅ Card:

<div className="max-w-sm p-4 border rounded shadow bg-white">
  <h2 className="text-lg font-bold mb-2">Card Title</h2>
  <p>This is a card with Tailwind CSS.</p>
</div>
</>
}
// ✅ Topic 12: React Forms Handling – Controlled Inputs, Validation, Formik & Yup
let formHandling=()=>{
// 🟡 1. Controlled Inputs in React
// 🔹 Simple Input Form (Controlled Component)
// import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your name is: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-3">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-3 py-2 rounded w-full"
        placeholder="Enter your name"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
        Submit
      </button>
    </form>
  );
}

// 🟡 2. Multiple Inputs with Object State
function MultiForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="space-y-3 p-4">
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border px-3 py-2 rounded w-full"
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border px-3 py-2 rounded w-full"
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
}
}
// ✅ Topic 13: React Router v6+ – Navigation, Dynamic Routes, Params, Protected Routes
let reactRouterDom=()=>{
// 🟡 1. Install React Router
// npm install react-router-dom

// 🟡 2. Basic Setup in App.js
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>🏠 Home Page</h2>;
}
function About() {
  return <h2>ℹ️ About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav className="space-x-4 p-4 bg-blue-100">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

// 🟡 3. Dynamic Route with Params
// import { useParams } from 'react-router-dom';

function UserPage() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}

// Route
<Route path="/user/:id" element={<UserPage />} />

// 🟡 4. 404 Not Found Page
function NotFound() {
  return <h1>❌ Page Not Found</h1>;
}

// Add in Routes
<Route path="*" element={<NotFound />} />

// 🟡 5. Nested Routes
function Dashboard() {
  return (
    <div>
      <h2>📊 Dashboard</h2>
      <Outlet />
    </div>
  );
}

function Profile() {
  return <p>👤 User Profile</p>;
}

// In Routes:
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
</Route>

// 🟡 6. Programmatic Navigation (useNavigate)
// import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // auth logic here...
    navigate('/dashboard');
  };

  return <button onClick={handleLogin}>Login</button>;
}

// 🟡 7. Protected Route (Private Route)
// 🔐 Step 1: Create a Fake Auth Wrapper
function PrivateRoute({ children }) {
  const isLoggedIn = true; // replace with real auth
  return isLoggedIn ? children : <Navigate to="/login" />;
}

// 🔐 Step 2: Use It in Routes
<Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>
}
// ✅ Topic 14: Axios in React – API Integration (GET, POST, PUT, DELETE)
let Axios=()=>{
// 🟡 1. Install Axios
// npm install axios

// 🟡 2. GET Request – Fetch Data from API
// import { useEffect, useState } from "react";
// import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">👥 User List</h2>
      <ul className="list-disc pl-6">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// 🟡 3. POST Request – Submit Form to API
function AddUser() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users", { name })
      .then((res) => console.log("User Added", res.data))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-3 py-2 rounded"
      />
      <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}

// 🟡 4. PUT Request – Update Data
function UpdateUser() {
  const [newName, setNewName] = useState("");

  const updateUser = () => {
    axios.put("https://jsonplaceholder.typicode.com/users/1", { name: newName })
      .then((res) => alert("Updated!"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-4 space-y-2">
      <input
        type="text"
        value={newName}
        placeholder="New name"
        onChange={(e) => setNewName(e.target.value)}
        className="border px-3 py-2 rounded"
      />
      <button onClick={updateUser} className="bg-yellow-500 text-white px-4 py-2 rounded">
        Update
      </button>
    </div>
  );
}

// 🟡 5. DELETE Request – Remove Data
function DeleteUser() {
  const deleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => alert("Deleted"))
      .catch((err) => console.error(err));
  };

  return (
    <button onClick={() => deleteUser(1)} className="bg-red-600 text-white px-4 py-2 rounded">
      Delete User 1
    </button>
  );
}

// 🟡 6. Handle Loading and Error States
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  axios.get(API)
    .then((res) => { setData(res.data); setLoading(false); })
    .catch((err) => { setError(err); setLoading(false); });
}, []);
}

// ✅ Topic 15: Advanced React Hooks – useRef, useMemo, useCallback (Only Practical)
let advancedHook=()=>{
 

// 🟡 2. useMemo – Memoize heavy calculation to improve performance
// import { useMemo, useState } from "react";

function ExpensiveCalc() {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(0);

  const factorial = useMemo(() => {
    console.log("Calculating...");
    let result = 1;
    for (let i = 1; i <= num; i++) result *= i;
    return result;
  }, [num]);

  return (
    <div className="p-4">
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        className="border px-2 py-1 mr-2"
      />
      <p>Factorial: {factorial}</p>
      <button onClick={() => setCount(count + 1)} className="bg-orange-500 text-white px-3 py-2">
        Re-render ({count})
      </button>
    </div>
  );
}

// 🟡 3. useCallback – Memoize function to avoid unnecessary re-creations
// import { useCallback, useState } from "react";

const Child = ({ handleClick }) => {
  console.log("Child Rendered");
  return (
    <button onClick={handleClick} className="bg-purple-600 text-white px-4 py-2 mt-2">
      Child Button
    </button>
  );
};

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked from Child");
  }, []);

  return (
    <div className="p-4">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="bg-gray-600 text-white px-4 py-2">
        ➕ Increment
      </button>
      <Child handleClick={handleClick} />
    </div>
  );
}


}

// ✅ Topic 16: Loader & Error Handling for API
let loadingError=()=>{
  // 🧑‍💻 Practical Example:
  // import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);   // loader state
  const [error, setError] = useState(null);        // error state

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch users. Please try again.');
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;  // Loader दिखाएं

  if (error) return <h2 style={{color: 'red'}}>{error}</h2>;  // Error दिखाएं

  return (
    <div>
      <h1>User List</h1>
      {users.map(user => <p key={user.id}>{user.name}</p>)}
    </div>
  );
};

// export default UsersList;

}

// ✅ Topic 17: Pagination & Search (With API) — Practical
let pagination=()=>{
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error('Error fetching posts:', err));
  }, []);

  // 🔍 Search Filter
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 📄 Pagination Logic
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div style={{ padding: '20px' }}>
      <h2>📄 Post List with Search & Pagination</h2>

      {/* 🔎 Search Input */}
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // reset to page 1
        }}
        style={{ padding: '5px', width: '250px' }}
      />

      {/* 📋 Posts */}
      {currentPosts.map(post => (
        <div key={post.id} style={{ border: '1px solid #ccc', marginTop: '10px', padding: '10px' }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}

      {/* 📑 Pagination Buttons */}
      <div style={{ marginTop: '20px' }}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              padding: '5px 10px',
              marginRight: '5px',
              background: currentPage === i + 1 ? 'black' : '#eee',
              color: currentPage === i + 1 ? 'white' : 'black',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

// export default PostList;
}

// ✅ Topic 18: Authentication in React (Login, Logout, Protected Route)
let authentication=()=>{
// 🎯 Goal:
// 1) Simple Login form
// 2) User data save in localStorage
// 3) Protected Route (user login नहीं तो access नहीं)
// 4) Logout system

// 📦 Step-by-Step Code
// 1️⃣ Setup React Router
// npm install react-router-dom
// File: App.jsx
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./Login";
// import Dashboard from "./Dashboard";
// import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// export default App;

// 2️⃣ Login Page
// File: Login.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === "") {
      alert("Username required");
      return;
    }

    localStorage.setItem("user", username); // 🔐 Save to localStorage
    navigate("/dashboard"); // Redirect
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

// export default Login;

// 3️⃣ Dashboard Page (Protected)
// File: Dashboard.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <h2>Welcome, {user}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

// export default Dashboard;

// 4️⃣ ProtectedRoute.jsx
// File: ProtectedRoute.jsx
// import React from "react";
// import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

// export default ProtectedRoute;
}

// ✅ Topic 19: Deploy React App on Netlify & Vercel (Step-by-Step Practical)
let deploy=()=>{
  // 📁 Step 1: App तैयार करो
  // npm run build

  // 🌐 Option 1: Deploy on Netlify
  // 🔹 Step-by-Step Guide:
// 👉1) https://netlify.com पर जाओ
// 2) GitHub से login करो
// 3) New Site from Git पर क्लिक करो
// 4) GitHub repo चुनो जिसमें React app है
// 5) नीचे ये settings दो:
// Build Command: npm run build
// Publish Directory: build

// 🌍 Bonus: Drag & Drop Deploy
// npm run build चलाओ
// https://app.netlify.com/drop पर जाओ
// build folder को drag करो – Done! 🎉





}
















